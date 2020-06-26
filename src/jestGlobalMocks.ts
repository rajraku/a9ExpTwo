// Object.defineProperty(window, 'CSS', {value: null});
// Object.defineProperty(document, 'doctype', {
//   value: '<!DOCTYPE html>'
// });
// Object.defineProperty(window, 'getComputedStyle', {
//   value: () => {
//     return {
//       display: 'none',
//       appearance: ['-webkit-appearance']
//     };
//   }
// });
// /**
//  * ISSUE: https://github.com/angular/material2/issues/7101
//  * Workaround for JSDOM missing transform property
//  */
// Object.defineProperty(document.body.style, 'transform', {
//   value: () => {
//     return {
//       enumerable: true,
//       configurable: true,
//     };
//   },
// });
// const mock = () => {
//     let storage = {};
//     return {
//       getItem: key => key in storage ? storage[key] : null,
//       setItem: (key, value) => storage[key] = value || '',
//       removeItem: key => delete storage[key],
//       clear: () => storage = {},
//     };
// };

// First, initialize the Angular testing environment.
// getTestBed().initTestEnvironment(
//     BrowserDynamicTestingModule,
//     platformBrowserDynamicTesting()
// );

// const _global: any = typeof global !== 'undefined' && global;
// const defaultFakedLocalizeTranslate: (messageParts: TemplateStringsArray,
//                                       substitutions: readonly any[]) => [TemplateStringsArray, readonly any[]] =
//   (messageParts: TemplateStringsArray, substitutions: readonly any[]) => {
//     console.log(messageParts);
//     console.log(substitutions);
//     return [messageParts, substitutions];
//   };

// const mockLocalize = jest.fn().mockImplementation(defaultFakedLocalizeTranslate);
// _global.mockLocalize = mockLocalize;

// Object.defineProperty(global, 'mockLocalize', {
//     value: () => {
//         return mockLocalize;
//     }
// });

// Object.defineProperty(global, '$localize', {
//     value: () => {
//         return {
//           translate: mockLocalize
//         };
//       }
// });
