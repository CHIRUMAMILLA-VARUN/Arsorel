#!/usr/bin/env python3
"""
Generate the Arsorel UPI payment QR code.

It reads the UPI ID + name from js/config.js (single source of truth) and
writes images/upi-qr.png. This is a STATIC UPI QR (no fixed amount) — the
customer types the amount in their UPI app, which is exactly what we want.

Run after changing the UPI ID:
    python3 tools/make_qr.py

Requires:  pip install "qrcode[pil]"
"""
import re
import pathlib
import urllib.parse

try:
    import qrcode
except ImportError:
    raise SystemExit('Missing dependency. Run:  pip install "qrcode[pil]"')

ROOT = pathlib.Path(__file__).resolve().parent.parent
config = (ROOT / "js" / "config.js").read_text(encoding="utf-8")


def grab(key: str, default: str) -> str:
    m = re.search(rf'{key}\s*:\s*"([^"]*)"', config)
    return m.group(1) if m else default


upi_id = grab("upiId", "your-upi-id@bank")
upi_name = grab("upiName", "Arsorel")

payload = "upi://pay?" + urllib.parse.urlencode(
    {"pa": upi_id, "pn": upi_name, "cu": "INR"}
)

qr = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_M,
    box_size=10,
    border=2,
)
qr.add_data(payload)
qr.make(fit=True)
img = qr.make_image(fill_color="#8a6a1f", back_color="white")

out = ROOT / "images" / "upi-qr.png"
out.parent.mkdir(parents=True, exist_ok=True)
img.save(out)

print(f"UPI QR written to {out}")
print(f"  Payee : {upi_name}")
print(f"  UPI ID: {upi_id}")
