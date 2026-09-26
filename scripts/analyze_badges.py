from PIL import Image
import os
files=['src/assets/images/da.png','src/assets/images/sa.png','src/assets/images/cp.png']
for name in files:
    path = os.path.join(os.getcwd(), name)
    if not os.path.exists(path):
        print(f'{name} - NOT FOUND')
        continue
    img = Image.open(path).convert('RGBA')
    w,h = img.size
    alpha = img.split()[-1]
    bbox = alpha.getbbox()
    # compute visible bbox via non-transparent pixels
    xs=[]; ys=[]
    for y in range(h):
        for x in range(w):
            if img.getpixel((x,y))[3] > 0:
                xs.append(x); ys.append(y)
    visible = (min(xs), min(ys), max(xs), max(ys)) if xs else None
    # compute padding
    pad_left = visible[0]
    pad_top = visible[1]
    pad_right = w - 1 - visible[2]
    pad_bottom = h - 1 - visible[3]
    print(name)
    print(' canvas size:', w, 'x', h)
    print(' visible bbox:', visible)
    print(' padding L T R B:', pad_left, pad_top, pad_right, pad_bottom)
    print(' visible width x height:', visible[2]-visible[0]+1, 'x', visible[3]-visible[1]+1)
    print('')
