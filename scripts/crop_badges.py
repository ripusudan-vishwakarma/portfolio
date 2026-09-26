from PIL import Image
import os
files=['src/assets/images/da.png','src/assets/images/sa.png','src/assets/images/cp.png']
for name in files:
    path = os.path.join(os.getcwd(), name)
    if not os.path.exists(path):
        print(f'{name} - NOT FOUND')
        continue
    img = Image.open(path).convert('RGBA')
    alpha = img.split()[-1]
    bbox = alpha.getbbox()
    if not bbox:
        print(f'{name} has no visible pixels; skipping')
        continue
    cropped = img.crop(bbox)
    base, ext = os.path.splitext(path)
    out = base + '.cropped.png'
    cropped.save(out)
    print(f'Wrote {out} (bbox={bbox}, size={cropped.size})')
