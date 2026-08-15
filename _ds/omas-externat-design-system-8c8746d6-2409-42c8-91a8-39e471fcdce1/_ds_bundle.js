/* @ds-bundle: {"format":4,"namespace":"OMASExternatDesignSystem_8c8746","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"30b7f574194b","components/actions/IconButton.jsx":"8a9941cf5bba","components/data-display/Badge.jsx":"905b0c7cb8db","components/data-display/Card.jsx":"8d511433f363","components/data-display/Tag.jsx":"c95a2c2df120","components/feedback/Dialog.jsx":"2deab8bcb202","components/feedback/Toast.jsx":"f1207b5c546d","components/feedback/Tooltip.jsx":"12cca4b4d39f","components/forms/Checkbox.jsx":"9a56ab0df811","components/forms/Input.jsx":"4ae7b2435d02","components/forms/Radio.jsx":"3c444e2c9763","components/forms/Select.jsx":"9d388ce349c8","components/forms/Switch.jsx":"61e2eb56ad0d","components/navigation/Tabs.jsx":"aa305707cdc9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OMASExternatDesignSystem_8c8746 = window.OMASExternatDesignSystem_8c8746 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    padding: '8px 16px',
    font: 'var(--text-body-sm)',
    gap: 6,
    radius: 'var(--radius-sm)'
  },
  md: {
    padding: '11px 22px',
    font: 'var(--text-body-md)',
    gap: 8,
    radius: 'var(--radius-md)'
  },
  lg: {
    padding: '15px 30px',
    font: 'var(--text-heading-sm)',
    gap: 10,
    radius: 'var(--radius-md)'
  }
};
function paletteFor(variant) {
  switch (variant) {
    case 'secondary':
      return {
        bg: 'var(--brand-secondary)',
        bgHover: 'var(--brand-secondary-hover)',
        fg: '#fff',
        shadow: 'var(--shadow-sticker-teal)',
        border: 'none'
      };
    case 'outline':
      return {
        bg: 'transparent',
        bgHover: 'var(--surface-brand-soft)',
        fg: 'var(--brand-primary)',
        shadow: 'none',
        border: '2px solid var(--brand-primary)'
      };
    case 'ghost':
      return {
        bg: 'transparent',
        bgHover: 'var(--surface-sunken)',
        fg: 'var(--text-primary)',
        shadow: 'none',
        border: 'none'
      };
    default:
      return {
        bg: 'var(--brand-primary)',
        bgHover: 'var(--brand-primary-hover)',
        fg: '#fff',
        shadow: 'var(--shadow-sticker-sm)',
        border: 'none'
      };
  }
}
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  children,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const p = paletteFor(variant);
  const hasStickerShadow = p.shadow !== 'none';
  const style = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    font: s.font,
    fontFamily: 'var(--font-display)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: fullWidth ? '100%' : 'auto',
    gap: s.gap,
    padding: s.padding,
    borderRadius: s.radius,
    border: p.border,
    background: hover && !disabled ? p.bgHover : p.bg,
    color: p.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    boxShadow: hasStickerShadow ? p.shadow : 'none',
    transform: press && !disabled && hasStickerShadow ? 'translate(3px,3px)' : 'translate(0,0)',
    transition: `transform var(--duration-fast) var(--ease-bounce), background var(--duration-base) var(--ease-standard)`
  };
  if (press && !disabled && hasStickerShadow) style.boxShadow = 'none';
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onClick: onClick
  }, icon && iconPosition === 'left' ? icon : null, children, icon && iconPosition === 'right' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  label
}) {
  const [hover, setHover] = React.useState(false);
  const dim = SIZES[size] || SIZES.md;
  const isSolid = variant === 'primary' || variant === 'secondary';
  const bg = variant === 'secondary' ? 'var(--brand-secondary)' : variant === 'primary' ? 'var(--brand-primary)' : 'transparent';
  const fg = isSolid ? '#fff' : 'var(--brand-primary)';
  const border = variant === 'outline' ? '2px solid var(--brand-primary)' : 'none';
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-pill)',
      border,
      background: bg,
      color: fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : hover ? 0.85 : 1,
      transition: 'opacity var(--duration-fast) var(--ease-standard)'
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: 'var(--surface-sunken)',
    fg: 'var(--text-secondary)'
  },
  brand: {
    bg: 'var(--surface-brand-soft)',
    fg: 'var(--text-brand)'
  },
  teal: {
    bg: 'var(--surface-teal-soft)',
    fg: 'var(--text-teal)'
  },
  warning: {
    bg: 'var(--sun-100)',
    fg: 'var(--sun-700)'
  },
  danger: {
    bg: 'var(--coral-100)',
    fg: 'var(--coral-600)'
  }
};
function Badge({
  children,
  tone = 'neutral'
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      font: 'var(--text-caption)',
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function Card({
  title,
  description,
  tag,
  image,
  footer,
  sticker = false,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: sticker ? 'var(--shadow-sticker-sm)' : 'var(--shadow-md)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      width: 280
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140,
      background: `center/cover url(${image})`,
      backgroundColor: 'var(--surface-teal-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, tag && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-teal)',
      background: 'var(--surface-teal-soft)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      width: 'fit-content'
    }
  }, tag), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-heading-sm)',
      fontFamily: 'var(--font-display)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, description), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-2)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  color = 'indigo'
}) {
  const map = {
    indigo: {
      bg: 'var(--indigo-50)',
      fg: 'var(--indigo-700)'
    },
    teal: {
      bg: 'var(--teal-50)',
      fg: 'var(--teal-700)'
    },
    sun: {
      bg: 'var(--sun-50)',
      fg: 'var(--sun-700)'
    },
    coral: {
      bg: 'var(--coral-50)',
      fg: 'var(--coral-600)'
    }
  };
  const c = map[color] || map.indigo;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-body)',
      padding: '5px 12px 5px 14px',
      borderRadius: 'var(--radius-pill)',
      background: c.bg,
      color: c.fg,
      border: `1px solid ${c.fg}22`
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: c.fg,
      fontSize: 14,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(20,21,42,.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-8)',
      width: 360,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-heading-md)',
      fontFamily: 'var(--font-display)',
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-secondary)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-2)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  success: {
    bg: 'var(--teal-600)',
    fg: '#fff'
  },
  info: {
    bg: 'var(--brand-primary)',
    fg: '#fff'
  },
  warning: {
    bg: 'var(--sun-400)',
    fg: 'var(--ink-900)'
  },
  danger: {
    bg: 'var(--coral-500)',
    fg: '#fff'
  }
};
function Toast({
  message,
  tone = 'info'
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: t.bg,
      color: t.fg,
      padding: '12px 20px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      font: 'var(--text-body-sm)',
      fontWeight: 600,
      fontFamily: 'var(--font-body)'
    }
  }, message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '120%',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      background: 'var(--ink-900)',
      color: '#fff',
      font: 'var(--text-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-sm)',
      flexShrink: 0,
      border: `2px solid ${checked ? 'var(--brand-primary)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--brand-primary)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-bounce)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  helper,
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--text-body-md)',
      fontFamily: 'var(--font-body)',
      padding: '11px 16px',
      borderRadius: 'var(--radius-md)',
      border: `2px solid ${error ? 'var(--danger)' : focus ? 'var(--brand-secondary)' : 'var(--border-default)'}`,
      outline: 'none',
      background: disabled ? 'var(--surface-sunken)' : '#fff',
      color: 'var(--text-primary)',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      flexShrink: 0,
      border: `2px solid ${checked ? 'var(--brand-primary)' : 'var(--border-strong)'}`,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: 'var(--brand-primary)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Choisir…',
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--text-body-md)',
      fontFamily: 'var(--font-body)',
      padding: '11px 16px',
      borderRadius: 'var(--radius-md)',
      border: `2px solid ${focus ? 'var(--brand-secondary)' : 'var(--border-default)'}`,
      outline: 'none',
      background: disabled ? 'var(--surface-sunken)' : '#fff',
      color: 'var(--text-primary)',
      appearance: 'none'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand-secondary)' : 'var(--ink-300)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,.25)',
      transition: 'left var(--duration-base) var(--ease-bounce)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      display: 'none'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '2px solid var(--border-default)',
      fontFamily: 'var(--font-display)'
    }
  }, tabs.map(t => {
    const active = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      style: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '10px 18px',
        marginBottom: -2,
        font: 'var(--text-body-md)',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        color: active ? 'var(--brand-primary)' : 'var(--text-secondary)',
        borderBottom: `3px solid ${active ? 'var(--brand-primary)' : 'transparent'}`,
        transition: 'color var(--duration-fast) var(--ease-standard)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
