---
title: 'Image fallback & responsive in NextJS'
date: '2022-05-30'
---

Image management in NextJS can be made by using **Image component**.

Using this component with Server Side Rendering option or either Client Side Rendering option enables to make use of a bunch of pre-made features such as *loader*, *quality settings*, *blurDataURL* (placeholder image beofre full loading) or *lazy loading*...

All these functionalities and more are clearly explained in [the online doc](https://nextjs.org/docs/api-reference/next/image).

*But one thing I have had a bit of difficulty to resolve is setting a **fallback image** in the case an image URL is wrong.*

## Fallback Image

The solution I found is to build a derivated component from *Image component* I called **ImageWithFallback**. This component imports the NextJS *Image component*, with a default *fallback image*.

It takes two required parameters :
* **src** - The original image URL.
* **fallback** - The fallback image.
* Other settings (width, eight, layout ...) are taken with **...rest** parameter. They can be defined either in the **ImageWithFallback** component, or in the call of this component in the parent component.

```javascript
import Image from 'next/image'
import { useState } from 'react'
import defImg from 'assets/default_movie.png'


export default function ImageWithFallback({ src, fallback, ...rest }) {
    const [imgSrc, setImgSrc] = useState(src)

    function handleError() {
        setImgSrc(fallback)
    }

    return (
        <div>

            <Image
                {...rest}
                src={imgSrc}
                layout='responsive'
                placeholder={fallback}
                onError={handleError}
            />
        </div>
    )
}
```

As you can see, the component accepts an **onError** eventHandler that enables the use of a *state setter* to change the src target to the **fallback image**.

## Responsive image

An important option for responsive image management is the proper use of **layout** property. Here are he accepted options you will have to use :

The **layout** behavior of the image as the viewport changes size.

* **intrinsic** (default)

    - Behavior : Scale down to fit width of container, up to image size
    - srcSet : 1x, 2x (based on imageSizes)
    - sizes : N/A
    - Has wrapper and sizer : yes

* **fixed**
    - Behavior : Sized to width and height exactly
    - srcSet : 1x, 2x (based on imageSizes)
    - sizes : N/A
    - has wrapper and sizer : yes

* **responsive**
    - Behavior : Scale to fit width of container
    - srcSet : 640w, 750w, ... 2048w, 3840w (based on imageSizes and deviceSizes)
    - sizes : 100vw
    - has wrapper and sizer : yes

* **fill**
    - Behavior : Grow in both X and Y axes to fill container
    - srcSet : 640w, 750w, ... 2048w, 3840w (based on imageSizes and deviceSizes)
    - sizes : 100vw
    - has wrapper and sizer : yes
* **raw**
    - Behavior : Insert the image element with no automatic layout behavior
    - srcSet : Behaves like responsive if the image has the sizes prop, and like fixed if it does not
    - sizes : optional
    - has wrapper and sizer : no
