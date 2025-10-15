# Button Text Visibility Fix

## Issue
Button text was disappearing on hover for "View Experience", "Contact Me", "View More Experience", and other buttons.

## Root Cause
The gradient overlay (`::before` pseudo-element) was covering the button text because it didn't have proper z-index layering.

## Solution

### 1. CSS Changes

#### **css/styles.css**

**Added z-index layering to buttons:**
```css
.btn {
    position: relative;  /* Added */
}

.primary-btn::before {
    z-index: 0;  /* Changed from -1 to 0 */
}

.primary-btn span {
    position: relative;
    z-index: 1;  /* Ensures text stays on top */
}
```

#### **css/about.css**

**Added same z-index layering:**
```css
.btn {
    position: relative;  /* Added */
}

.btn span {
    position: relative;
    z-index: 1;  /* Ensures text stays on top */
}
```

### 2. HTML Changes

**Wrapped all button text in `<span>` tags:**

#### **about.html**
```html
<!-- Before -->
<a href="#experience" class="btn primary-btn">View Experience</a>

<!-- After -->
<a href="#experience" class="btn primary-btn"><span>View Experience</span></a>
```

**Updated buttons:**
- "View Experience" button
- "Download CV" button
- "View More Experience" button
- "Contact Me" button (CTA section)
- "View Showreel" button (CTA section)

#### **index.html**
```html
<!-- Before -->
<button type="submit" class="btn primary-btn">Send Message</button>

<!-- After -->
<button type="submit" class="btn primary-btn"><span>Send Message</span></button>
```

**Updated buttons:**
- "Send Message" button (contact form)

## How It Works

### Z-Index Stacking:
1. **Button container** - `position: relative`
2. **Gradient overlay** (`::before`) - `z-index: 0` (background layer)
3. **Text span** - `z-index: 1` (foreground layer)

This ensures the text always appears above the gradient overlay, even on hover.

## Files Modified

1. `css/styles.css` - Added z-index to .btn and .primary-btn
2. `css/about.css` - Added z-index to .btn
3. `about.html` - Wrapped 5 button texts in spans
4. `index.html` - Wrapped 1 button text in span

## Testing

✅ "View Experience" button - Text visible on hover
✅ "Download CV" button - Text visible on hover
✅ "View More Experience" button - Text visible on hover
✅ "Contact Me" button - Text visible on hover
✅ "View Showreel" button - Text visible on hover
✅ "Send Message" button - Text visible on hover

## Result

All button text now remains visible during hover animations while maintaining the smooth gradient transition effect.

