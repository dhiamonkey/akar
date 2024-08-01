import { blackA, grass, green, indigo, mauve, purple, red, slate, teal, violet } from '@radix-ui/colors';
import presetUno from '@unocss/preset-uno';
import { defineConfig } from 'unocss';

export default defineConfig({
  content: {
    filesystem: [
      '../packages/akar/src/**/*.vue',
    ],
  },
  presets: [
    presetUno(),
  ],
  theme: {
    animation: {
      durations: {
        close2D: '1000ms',
        contentHide: '150ms',
        contentShow: '150ms',
        enterFromLeft: '250ms',
        enterFromRight: '250ms',
        exitToLeft: '250ms',
        exitToRight: '250ms',
        fadeIn: '200ms',
        fadeOut: '200ms',
        hide: '100ms',
        open2D: '1000ms',
        overlayHide: '300ms',
        overlayShow: '300ms',
        scaleIn: '200ms',
        scaleOut: '200ms',
        slideDown: '300ms',
        slideDownAndFade: '400ms',
        slideDownAndHide: '200ms',
        slideIn: '150ms',
        slideLeftAndFade: '400ms',
        slideRightAndFade: '400ms',
        slideUp: '300ms',
        slideUpAndFade: '400ms',
        swipeOut: '100ms',
      },
      keyframes: {
        close2D: '{from:{width:var(--radix-accordion-content-width);height:var(--radix-accordion-content-height);}to:{width:0;height:0;}}',
        contentHide: '{from:{opacity:1;transform:translate(-50%,-50%) scale(1);}to:{opacity:0;transform:translate(-50%,-48%) scale(0.96);}}',
        contentShow: '{from:{opacity:0;transform:translate(-50%,-48%) scale(0.96);}to:{opacity:1;transform:translate(-50%,-50%) scale(1);}}',
        enterFromLeft: '{from:{opacity:0;transform:translateX(-200px);}to:{opacity:1;transform:translateX(0);}}',
        enterFromRight: '{from:{opacity:0;transform:translateX(200px);}to:{opacity:1;transform:translateX(0);}}',
        exitToLeft: '{from:{opacity:1;transform:translateX(0);}to:{opacity:0;transform:translateX(-200px);}}',
        exitToRight: '{from:{opacity:1;transform:translateX(0);}to:{opacity:0;transform:translateX(200px);}}',
        fadeIn: '{from:{opacity:0;}to:{opacity:1;}}',
        fadeOut: '{from:{opacity:1;}to:{opacity:0;}}',
        hide: '{from:{opacity:1;}to:{opacity:0;}}',
        open2D: '{from:{width:0;height:0;}to:{width:var(--radix-accordion-content-width);height:var(--radix-accordion-content-height);}}',
        overlayHide: '{from:{opacity:1;}to:{opacity:0;}}',
        overlayShow: '{from:{opacity:0;}to:{opacity:1;}}',
        scaleIn: '{from:{opacity:0;transform:rotateX(-10deg) scale(0.9);}to:{opacity:1;transform:rotateX(0deg) scale(1);}}',
        scaleOut: '{from:{opacity:1;transform:rotateX(0deg) scale(1);}to:{opacity:0;transform:rotateX(-10deg) scale(0.95);}}',
        slideDown: '{from:{height:0;}to:{height:var(--radix-collapsible-content-height);}}',
        slideDownAndFade: '{from:{opacity:0;transform:translateY(-2px);}to:{opacity:1;transform:translateY(0);}}',
        slideDownAndHide: '{from:{opacity:1;transform:translateY(0);}to:{opacity:0;transform:translateY(-2px);}}',
        slideIn: '{from:{transform:translateX(calc(100% + var(--viewport-padding)));}to:{transform:translateX(0);}}',
        slideLeftAndFade: '{from:{opacity:0;transform:translateX(2px);}to:{opacity:1;transform:translateX(0);}}',
        slideRightAndFade: '{from:{opacity:0;transform:translateX(-2px);}to:{opacity:1;transform:translateX(0);}}',
        slideUp: '{from:{height:var(--radix-collapsible-content-height);}to:{height:0;}}',
        slideUpAndFade: '{from:{opacity:0;transform:translateY(2px);}to:{opacity:1;transform:translateY(0);}}',
        swipeOut: '{from:{transform:translateX(var(--radix-toast-swipe-end-x));}to:{transform:translateX(calc(100% + var(--viewport-padding)));}}',
      },
      timingFns: {
        'bezier-1': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bezier-2': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
    colors: {
      ...blackA,
      ...mauve,
      ...violet,
      ...green,
      ...grass,
      ...red,
      ...indigo,
      ...purple,
      ...teal,
      ...slate,
    },
  },
});
