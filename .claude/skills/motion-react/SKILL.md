---
name: motion-react
description: Use when adding animations to a React component in this project — installs and applies Motion (motion.dev), covering motion components, transitions, gestures, scroll-triggered animations, layout animations, and exit animations via AnimatePresence.
---

# Motion for React

Motion (motion.dev) is the animation library for this project's React components.

## Install

```bash
npm install motion
```

## Import

```javascript
import { motion, AnimatePresence } from "motion/react"
```

## Core concept

Prefix any HTML or SVG tag with `motion.` to unlock animation props (`animate`, `initial`, `whileHover`, `exit`, etc.).

Physical properties (`x`, `y`, `scale`, `rotate`) animate with spring physics by default. Visual properties (`opacity`, `backgroundColor`) animate with tween easing by default.

## Patterns

**Simple animation**
```javascript
<motion.ul animate={{ rotate: 360 }} />
```

**Custom transition**
```javascript
<motion.div
  animate={{ scale: 2, transition: { duration: 2 } }}
/>
```

**Enter animation**
```javascript
<motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} />
```
Pass `initial={false}` to skip the enter animation (e.g. on first mount).

**Gestures**
```javascript
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log("hover started!")}
/>
```

**Scroll-triggered**
```javascript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
/>
```

**Layout animation** (animates size/position changes automatically)
```javascript
<motion.div layout />
```

**Exit animation** (requires wrapping in `AnimatePresence`)
```javascript
<AnimatePresence>
  {show ? <motion.div key="box" exit={{ opacity: 0 }} /> : null}
</AnimatePresence>
```

## Reference

Full docs: https://motion.dev/docs/react-quick-start
