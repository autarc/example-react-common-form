(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    134: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return FormField;
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117),
        _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(214);
      __webpack_require__(1474);
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var FormField = function (_ref) {
        var placeholder = _ref.placeholder,
          className = _ref.className,
          labelClassName = _ref.labelClassName,
          inputClassName = _ref.inputClassName,
          errorClassName = _ref.errorClassName,
          useFieldParams = _objectWithoutProperties(_ref, [
            'placeholder',
            'className',
            'labelClassName',
            'inputClassName',
            'errorClassName',
          ]),
          _useFormField = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__.b)(useFieldParams),
          id = _useFormField.id,
          label = _useFormField.label,
          name = _useFormField.name,
          type = _useFormField.type,
          register = _useFormField.register,
          onChange = _useFormField.onChange,
          error = _useFormField.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__.a)('common-form-field', className),
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'label',
            {
              className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__.a)(
                'common-form-field__label',
                labelClassName,
              ),
              htmlFor: id,
            },
            label,
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__.a)(
              'common-form-field__input',
              inputClassName,
            ),
            id: id,
            type: type,
            name: name,
            ref: register,
            onChange: onChange,
            placeholder: placeholder,
            'aria-invalid': error ? 'true' : 'false',
          }),
          error && error.message
            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__.a)(
                    'common-form-field__error',
                    errorClassName,
                  ),
                  role: 'alert',
                },
                error.message,
              )
            : null,
        );
      };
      FormField.displayName = 'FormField';
      try {
        (FormField.displayName = 'FormField'),
          (FormField.__docgenInfo = {
            description: '',
            displayName: 'FormField',
            props: {
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !0,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'ReactNode' },
              },
              type: {
                defaultValue: null,
                description: '',
                name: 'type',
                required: !1,
                type: { name: 'FormFieldType' },
              },
              rules: {
                defaultValue: null,
                description: '',
                name: 'rules',
                required: !1,
                type: {
                  name:
                    'Partial<{ required: string | boolean | ValidationValueMessage<boolean>; min: ValidationRule<ReactText>; max: ValidationRule<ReactText>; maxLength: ValidationRule<...>; minLength: ValidationRule<...>; pattern: ValidationRule<...>; validate: Validate | Record<...>; }>',
                },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string | number' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '((e: ChangeEvent<HTMLInputElement>) => unknown)' },
              },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              labelClassName: {
                defaultValue: null,
                description: '',
                name: 'labelClassName',
                required: !1,
                type: { name: 'string' },
              },
              inputClassName: {
                defaultValue: null,
                description: '',
                name: 'inputClassName',
                required: !1,
                type: { name: 'string' },
              },
              errorClassName: {
                defaultValue: null,
                description: '',
                name: 'errorClassName',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/FormField/index.tsx#FormField'] = {
              docgenInfo: FormField.__docgenInfo,
              name: 'FormField',
              path: 'src/components/FormField/index.tsx#FormField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (useFormField.displayName = 'useFormField'),
          (useFormField.__docgenInfo = {
            description: '@param param -',
            displayName: 'useFormField',
            props: {
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !0,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !1,
                type: { name: 'ReactNode' },
              },
              type: {
                defaultValue: null,
                description: '',
                name: 'type',
                required: !1,
                type: { name: 'FormFieldType' },
              },
              rules: {
                defaultValue: null,
                description: '',
                name: 'rules',
                required: !1,
                type: {
                  name:
                    'Partial<{ required: string | boolean | ValidationValueMessage<boolean>; min: ValidationRule<ReactText>; max: ValidationRule<ReactText>; maxLength: ValidationRule<...>; minLength: ValidationRule<...>; pattern: ValidationRule<...>; validate: Validate | Record<...>; }>',
                },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string | number' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '((e: ChangeEvent<HTMLInputElement>) => unknown)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/FormField/index.tsx#useFormField'] = {
              docgenInfo: useFormField.__docgenInfo,
              name: 'useFormField',
              path: 'src/components/FormField/index.tsx#useFormField',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    1468: function (module, exports, __webpack_require__) {
      'use strict';
      var _clientApi = __webpack_require__(65),
        _clientLogger = __webpack_require__(40),
        _configFilename = __webpack_require__(1469);
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      (_configFilename.args || _configFilename.argTypes) &&
        _clientLogger.logger.warn(
          'Invalid args/argTypes in config, ignoring.',
          JSON.stringify({ args: _configFilename.args, argTypes: _configFilename.argTypes }),
        ),
        _configFilename.decorators &&
          _configFilename.decorators.forEach(function (decorator) {
            return (0, _clientApi.addDecorator)(decorator, !1);
          }),
        (_configFilename.parameters || _configFilename.globals || _configFilename.globalTypes) &&
          (0, _clientApi.addParameters)(
            _objectSpread(
              _objectSpread({}, _configFilename.parameters),
              {},
              { globals: _configFilename.globals, globalTypes: _configFilename.globalTypes },
            ),
            !1,
          ),
        _configFilename.argTypesEnhancers &&
          _configFilename.argTypesEnhancers.forEach(function (enhancer) {
            return (0, _clientApi.addArgTypesEnhancer)(enhancer);
          });
    },
    1469: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'parameters', function () {
          return parameters;
        }),
        __webpack_require__.d(__webpack_exports__, 'decorators', function () {
          return decorators;
        });
      var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518),
        _storybook_addon_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(519),
        parameters = {
          layout: 'centered',
          viewport: {
            viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS,
          },
          backgrounds: {
            default: 'development',
            values: [{ name: 'development', value: 'rgba(255, 71, 133, 0.5)' }],
          },
        },
        decorators = [
          function (storyFn, context) {
            return Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_1__.withConsole)()(
              storyFn,
            )(context);
          },
        ];
    },
    1472: function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0, __webpack_require__(382).configure)([__webpack_require__(1473)], module, !1);
      }.call(this, __webpack_require__(122)(module)));
    },
    1473: function (module, exports, __webpack_require__) {
      var map = {
        './__support__/CommonForm.stories.tsx': 1483,
        './components/FormField/__support__/FormField.stories.tsx': 1478,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1473);
    },
    1474: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(1475),
        content = __webpack_require__(1476);
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    1476: function (module, exports, __webpack_require__) {
      (exports = __webpack_require__(1477)(!1)).push([
        module.i,
        '/**\n * # Form Field (Styles)\n *\n *\n */\n\n.common-form-field {\n  --color-grey-1: #e3e3e3;\n  --color-grey-2: #c3c3c3;\n  --color-grey-3: #a3a3a3;\n  --color-red: rgb(255, 0, 0);\n}\n\n.common-form-field__label {\n  display: block;\n  /* padding: 5px 10px; */\n  /* position: relative; */\n}\n\n.common-form-field__input {\n  display: block;\n  width: 100%;\n  /* padding: 10px; */\n  /* padding: 5px 10px; */\n  margin-top: 2px;\n  border: 1px solid;\n  border-color: var(--color-grey-1);\n  outline: none;\n}\n\n.common-form-field__input:hover {\n  border-color: var(--color-grey-2);\n}\n\n.common-form-field__input:focus {\n  border-color: var(--color-grey-3);\n}\n\n.common-form-field__error {\n  margin-top: 0.5rem;\n  margin-left: 7px;\n  color: var(--color-red);\n}\n',
        '',
      ]),
        (module.exports = exports);
    },
    1478: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Minimal', function () {
          return Minimal;
        }),
        __webpack_require__.d(__webpack_exports__, 'ControlledValue', function () {
          return ControlledValue;
        }),
        __webpack_require__.d(__webpack_exports__, 'CustomStyled', function () {
          return CustomStyled;
        });
      var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
      __webpack_exports__.default = {
        title: 'components/FormField',
        decorators: [
          function (story) {
            var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__.b)();
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_hook_form__WEBPACK_IMPORTED_MODULE_0__.a,
              methods,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'form',
                {
                  onSubmit: methods.handleSubmit(function (data) {
                    console.log('data', data);
                  }),
                },
                story(),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('input', {
                  type: 'submit',
                }),
              ),
            );
          },
        ],
      };
      var Minimal = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          ___WEBPACK_IMPORTED_MODULE_2__.a,
          { name: 'first_name' },
        );
      };
      Minimal.displayName = 'Minimal';
      var ControlledValue = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          ___WEBPACK_IMPORTED_MODULE_2__.a,
          { name: 'last_name', value: 'Lovelace' },
        );
      };
      ControlledValue.displayName = 'ControlledValue';
      var CustomStyled = function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          ___WEBPACK_IMPORTED_MODULE_2__.a,
          {
            name: 'color',
            label: 'Favorite Color?',
            className: 'test',
            rules: { minLength: { value: 4, message: 'Short color names are not supported' } },
          },
        );
      };
      (CustomStyled.displayName = 'CustomStyled'),
        (Minimal.parameters = Object.assign(
          { storySource: { source: '() => <FormField name="first_name" />' } },
          Minimal.parameters,
        )),
        (ControlledValue.parameters = Object.assign(
          { storySource: { source: '() => <FormField name="last_name" value="Lovelace" />' } },
          ControlledValue.parameters,
        )),
        (CustomStyled.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <FormField\n    name="color"\n    label="Favorite Color?"\n    className="test"\n    rules={{\n      minLength: {\n        value: 4,\n        message: \'Short color names are not supported\',\n      },\n    }}\n  />\n)',
            },
          },
          CustomStyled.parameters,
        ));
    },
    1483: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic;
        }),
        __webpack_require__.d(__webpack_exports__, 'Controlled', function () {
          return Controlled;
        }),
        __webpack_require__.d(__webpack_exports__, 'Nested', function () {
          return Nested;
        }),
        __webpack_require__.d(__webpack_exports__, 'Reactive', function () {
          return Reactive;
        }),
        __webpack_require__.d(__webpack_exports__, 'Validation', function () {
          return Validation;
        });
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        index_esm = __webpack_require__(106),
        clsx_m = __webpack_require__(117),
        FormField = __webpack_require__(134),
        Form = function (_ref) {
          var options = _ref.options,
            className = _ref.className,
            onSubmit = _ref.onSubmit,
            children = _ref.children,
            methods = Object(index_esm.b)(options);
          return react_default.a.createElement(
            index_esm.a,
            methods,
            react_default.a.createElement(
              'form',
              {
                className: Object(clsx_m.a)('common-form__form', className),
                onSubmit: methods.handleSubmit(onSubmit),
                'aria-label': 'form',
              },
              children,
            ),
          );
        };
      (Form.displayName = 'Form'), (Form.Field = FormField.a);
      try {
        (Form.displayName = 'Form'),
          (Form.__docgenInfo = {
            description: '',
            displayName: 'Form',
            props: {
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !0,
                type: { name: 'SubmitHandler<any>' },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !1,
                type: {
                  name:
                    'Partial<{ mode: "onSubmit" | "onChange" | "onBlur" | "all"; reValidateMode: "onSubmit" | "onChange" | "onBlur" | "all"; defaultValues: { [x: string]: any; }; resolver: Resolver<Record<string, any>, object>; context: object; shouldFocusError: boolean; shouldUnregister: boolean; criteriaMode: "all" | "firstError"; }> ...',
                },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Form/index.tsx#Form'] = {
              docgenInfo: Form.__docgenInfo,
              name: 'Form',
              path: 'src/components/Form/index.tsx#Form',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var hooks = __webpack_require__(214);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      __webpack_exports__.default = { title: 'CommonForm' };
      var Basic = function (_ref) {
        var onSubmit = _ref.onSubmit;
        return react_default.a.createElement(
          Form,
          { onSubmit: onSubmit },
          react_default.a.createElement(Form.Field, { name: 'first_name' }),
          react_default.a.createElement('button', { type: 'submit' }, 'Submit'),
        );
      };
      (Basic.displayName = 'Basic'),
        (Basic.args = {
          onSubmit: function (data) {
            console.log('FormState', data);
          },
        });
      var Controlled = function (_ref2) {
        var onSubmit = _ref2.onSubmit,
          _useState2 = _slicedToArray(Object(react.useState)(''), 2),
          firstName = _useState2[0],
          setFirstName = _useState2[1];
        return react_default.a.createElement(
          Form,
          { onSubmit: onSubmit },
          react_default.a.createElement(Form.Field, {
            name: 'first_name',
            label: 'First Name',
            value: firstName,
            onChange: function (event) {
              var value = event.target.value;
              setFirstName(value);
            },
          }),
          react_default.a.createElement('button', null, 'Submit'),
        );
      };
      (Controlled.displayName = 'Controlled'), (Controlled.args = Basic.args);
      var Nested = function (_ref3) {
        var onSubmit = _ref3.onSubmit;
        return react_default.a.createElement(
          Form,
          { onSubmit: onSubmit },
          react_default.a.createElement(
            'ul',
            null,
            react_default.a.createElement(
              'li',
              null,
              react_default.a.createElement(Form.Field, {
                name: 'first_name',
                label: 'First Name',
              }),
            ),
            react_default.a.createElement(
              'li',
              null,
              react_default.a.createElement(FormField.a, {
                name: 'password',
                type: hooks.a.PASSWORD,
              }),
            ),
          ),
          react_default.a.createElement('button', { type: 'submit' }, 'Submit'),
        );
      };
      (Nested.displayName = 'Nested'), (Nested.args = Basic.args);
      var Reactive = function () {
        var _useState4 = _slicedToArray(Object(react.useState)(null), 2),
          result = _useState4[0],
          setResult = _useState4[1],
          _useState6 = _slicedToArray(Object(react.useState)(!1), 2),
          isPending = _useState6[0],
          setIsPending = _useState6[1];
        return react_default.a.createElement(
          'div',
          null,
          react_default.a.createElement(
            Form,
            {
              onSubmit: function (data) {
                setIsPending(!0);
                setTimeout(function () {
                  setIsPending(!1), setResult(data);
                }, 1e3);
              },
            },
            react_default.a.createElement(Form.Field, { name: 'first_name' }),
            react_default.a.createElement(Form.Field, { name: 'last_name' }),
            react_default.a.createElement('input', {
              type: 'submit',
              value: 'Update',
              disabled: isPending,
            }),
          ),
          result &&
            react_default.a.createElement(
              react_default.a.Fragment,
              null,
              react_default.a.createElement('div', null, 'First Name: ', result.first_name),
              react_default.a.createElement('div', null, 'Last Name: ', result.last_name),
            ),
        );
      };
      (Reactive.displayName = 'Reactive'), (Reactive.args = {});
      var Validation = function (_ref4) {
        var onSubmit = _ref4.onSubmit;
        return react_default.a.createElement(
          Form,
          { onSubmit: onSubmit },
          react_default.a.createElement(Form.Field, {
            name: 'brand',
            rules: {
              pattern: {
                value: /^example\.brand\.name/,
                message: 'The brand should start with "example.brand.name" ...',
              },
            },
          }),
          react_default.a.createElement(Form.Field, {
            name: 'dish',
            rules: {
              validate: function (value) {
                return 'Pizza' === value || 'Favorite food is not recognized (can only be "Pizza")';
              },
            },
          }),
          react_default.a.createElement(Form.Field, { name: 'alias', rules: { minLength: 8 } }),
          react_default.a.createElement('button', null, 'Submit'),
        );
      };
      (Validation.displayName = 'Validation'),
        (Validation.args = Basic.args),
        (Basic.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ onSubmit }) => (\n  <Form onSubmit={onSubmit}>\n    <Form.Field name="first_name" />\n    <button type="submit">Submit</button>\n  </Form>\n)',
            },
          },
          Basic.parameters,
        )),
        (Controlled.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ onSubmit }) => {\n  const [firstName, setFirstName] = useState(\'\');\n\n  return (\n    <Form onSubmit={onSubmit}>\n      <Form.Field\n        name="first_name"\n        label="First Name"\n        value={firstName}\n        onChange={(event) => {\n          const value = event.target.value;\n          setFirstName(value);\n        }}\n      />\n      <button>Submit</button>\n    </Form>\n  );\n}',
            },
          },
          Controlled.parameters,
        )),
        (Nested.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ onSubmit }) => (\n  <Form onSubmit={onSubmit}>\n    <ul>\n      <li>\n        <Form.Field name="first_name" label="First Name" />\n      </li>\n      <li>\n        <FormField name="password" type={FormFieldType.PASSWORD} />\n      </li>\n    </ul>\n    <button type="submit">Submit</button>\n  </Form>\n)',
            },
          },
          Nested.parameters,
        )),
        (Reactive.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => {\n  const [result, setResult] = useState<FormState | null>(null);\n  const [isPending, setIsPending] = useState<boolean>(false);\n\n  return (\n    <div>\n      <Form\n        onSubmit={(data: FormState) => {\n          setIsPending(true);\n\n          const delay = 1000; // = 1s\n          setTimeout(() => {\n            setIsPending(false);\n            setResult(data);\n          }, delay);\n        }}\n      >\n        <Form.Field name="first_name" />\n        <Form.Field name="last_name" />\n        <input type="submit" value="Update" disabled={isPending} />\n      </Form>\n      {result && (\n        <>\n          <div>First Name: {result.first_name}</div>\n          <div>Last Name: {result.last_name}</div>\n        </>\n      )}\n    </div>\n  );\n}',
            },
          },
          Reactive.parameters,
        )),
        (Validation.parameters = Object.assign(
          {
            storySource: {
              source:
                '({ onSubmit }) => (\n  <Form onSubmit={onSubmit}>\n    <Form.Field\n      name="brand"\n      rules={{\n        pattern: {\n          value: /^example\\.brand\\.name/,\n          message: \'The brand should start with "example.brand.name" ...\',\n        },\n      }}\n    />\n    <Form.Field\n      name="dish"\n      rules={{\n        validate(value) {\n          const requiredValue = \'Pizza\';\n          const errorMessage = `Favorite food is not recognized (can only be "${requiredValue}")`;\n          return value === requiredValue || errorMessage;\n        },\n      }}\n    />\n    <Form.Field\n      name="alias"\n      rules={{\n        minLength: 8,\n      }}\n    />\n    <button>Submit</button>\n  </Form>\n)',
            },
          },
          Validation.parameters,
        ));
      try {
        (Basic.displayName = 'Basic'),
          (Basic.__docgenInfo = {
            description: '',
            displayName: 'Basic',
            props: {
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !0,
                type: { name: '(data: unknown) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/__support__/CommonForm.stories.tsx#Basic'] = {
              docgenInfo: Basic.__docgenInfo,
              name: 'Basic',
              path: 'src/__support__/CommonForm.stories.tsx#Basic',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Controlled.displayName = 'Controlled'),
          (Controlled.__docgenInfo = {
            description: '',
            displayName: 'Controlled',
            props: {
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !0,
                type: { name: '(data: unknown) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/__support__/CommonForm.stories.tsx#Controlled'] = {
              docgenInfo: Controlled.__docgenInfo,
              name: 'Controlled',
              path: 'src/__support__/CommonForm.stories.tsx#Controlled',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Nested.displayName = 'Nested'),
          (Nested.__docgenInfo = {
            description: '',
            displayName: 'Nested',
            props: {
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !0,
                type: { name: '(data: unknown) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/__support__/CommonForm.stories.tsx#Nested'] = {
              docgenInfo: Nested.__docgenInfo,
              name: 'Nested',
              path: 'src/__support__/CommonForm.stories.tsx#Nested',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Reactive.displayName = 'Reactive'),
          (Reactive.__docgenInfo = { description: '', displayName: 'Reactive', props: {} }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/__support__/CommonForm.stories.tsx#Reactive'] = {
              docgenInfo: Reactive.__docgenInfo,
              name: 'Reactive',
              path: 'src/__support__/CommonForm.stories.tsx#Reactive',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Validation.displayName = 'Validation'),
          (Validation.__docgenInfo = {
            description: '',
            displayName: 'Validation',
            props: {
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !0,
                type: { name: '(data: unknown) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/__support__/CommonForm.stories.tsx#Validation'] = {
              docgenInfo: Validation.__docgenInfo,
              name: 'Validation',
              path: 'src/__support__/CommonForm.stories.tsx#Validation',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    214: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return FormFieldType;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return useFormField;
        });
      var FormFieldType,
        react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
      !(function (FormFieldType) {
        (FormFieldType.TEXT = 'text'), (FormFieldType.PASSWORD = 'password');
      })(FormFieldType || (FormFieldType = {}));
      var DEFAULT_FORM_FIELD_TYPE = FormFieldType.TEXT,
        DEFAULT_RULES = { required: { value: !0, message: 'Input required' } },
        counter = 0;
      function useFormField(_ref) {
        var name = _ref.name,
          _ref$label = _ref.label,
          label = void 0 === _ref$label ? name : _ref$label,
          _ref$type = _ref.type,
          type = void 0 === _ref$type ? DEFAULT_FORM_FIELD_TYPE : _ref$type,
          _ref$rules = _ref.rules,
          rules = void 0 === _ref$rules ? DEFAULT_RULES : _ref$rules,
          value = _ref.value,
          onChange = _ref.onChange,
          _useFormContext = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__.c)(),
          setValue = _useFormContext.setValue,
          register = _useFormContext.register,
          errors = _useFormContext.errors,
          id = Object(react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
            return counter++, `common-form-field:${name}-${counter}`;
          }, []);
        return (
          Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
            function () {
              setValue(name, value);
            },
            [name, value],
          ),
          {
            id: id,
            name: name,
            label: label,
            type: type,
            register: register(rules),
            error: errors[name],
            onChange: onChange,
          }
        );
      }
    },
    520: function (module, exports, __webpack_require__) {
      __webpack_require__(521),
        __webpack_require__(668),
        __webpack_require__(669),
        __webpack_require__(824),
        __webpack_require__(1421),
        __webpack_require__(1452),
        __webpack_require__(1454),
        __webpack_require__(1466),
        __webpack_require__(1468),
        (module.exports = __webpack_require__(1472));
    },
    585: function (module, exports) {},
    669: function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(382);
    },
  },
  [[520, 1, 2]],
]);
//# sourceMappingURL=main.bdbe11f5aaf77de9bf3a.bundle.js.map
