## Solid

| Principle                           | Examples                                                                                                                                  |
| ----------------------------------- |-------------------------------------------------------------------------------------------------------------------------------------------|
| Single Responsibility Principle	  | https://github.com/microsoft/vscode/blob/9a281018181dca942cc46c03f9795be00912e38d/src/vs/editor/browser/services/openerService.ts#L20-L65 |
| Open / Closed Principle	          | https://github.com/microsoft/vscode/blob/9a281018181dca942cc46c03f9795be00912e38d/build/lib/tsb/index.ts#L79-L97                          |
| Liskov Substitution Principle       | https://github.com/microsoft/vscode/blob/9a281018181dca942cc46c03f9795be00912e38d/src/vs/base/parts/ipc/common/ipc.mp.ts#L64-L78          |
| Interface Seggregation Principle    | https://github.com/microsoft/vscode/blob/9a281018181dca942cc46c03f9795be00912e38d/src/vs/base/browser/ui/button/button.ts#L387-L445       |
| Dependency Inversion Principle      | https://github.com/microsoft/vscode/blob/main/src/vs/base/common/async.ts#L1974-L1985                                                     |

## Anti Solid

| Principle                                | Examples                                                                                                                       |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Anti - Single Responsibility Principle	  | https://github.com/microsoft/vscode/blob/9a281018181dca942cc46c03f9795be00912e38d/src/vs/base/browser/indexedDB.ts#L23-L177    |
| Anti - Open / Closed Principle	          | https://github.com/microsoft/vscode/blob/9a281018181dca942cc46c03f9795be00912e38d/src/vs/base/browser/keyboardEvent.ts#L13-L51 |
| Anti - Liskov Substitution Principle     | https://github.com/microsoft/vscode/blob/9a281018181dca942cc46c03f9795be00912e38d/src/vs/base/common/async.ts#L986-L1014       |
| Anti - Interface Seggregation Principle  | https://github.com/microsoft/vscode/blob/9a281018181dca942cc46c03f9795be00912e38d/src/vs/base/common/console.ts#L53-L55        |
| Anti - Dependency Inversion Principle    | https://github.com/microsoft/vscode/blob/main/src/vs/base/common/async.ts#L2015-L2070                                          |
