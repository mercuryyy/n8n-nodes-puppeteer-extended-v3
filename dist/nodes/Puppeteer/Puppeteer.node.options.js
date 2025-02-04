"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeDescription = void 0;
const globalOptions = [
    {
        displayName: "Emulate Device",
        name: "device",
        type: "options",
        default: "",
        typeOptions: {
            loadOptionsMethod: "getDevices",
        },
        required: false,
    },
    {
        displayName: "Executable path",
        name: "executablePath",
        type: "string",
        required: false,
        default: "",
        description: "A path where Puppeteer expects to find the bundled browser.",
    },
    {
        displayName: "Extra Headers",
        name: "headers",
        placeholder: "Add Header",
        type: "fixedCollection",
        typeOptions: {
            multipleValues: true,
        },
        description: "The headers to send.",
        default: {},
        options: [
            {
                name: "parameter",
                displayName: "Header",
                values: [
                    {
                        displayName: "Name",
                        name: "name",
                        type: "string",
                        default: "",
                        description: "Name of the header.",
                    },
                    {
                        displayName: "Value",
                        name: "value",
                        type: "string",
                        default: "",
                        description: "Value to set for the header.",
                    },
                ],
            },
        ],
    },
    {
        displayName: "Launch Arguments",
        name: "launchArguments",
        placeholder: "Add Argument",
        type: "fixedCollection",
        typeOptions: {
            multipleValues: true,
        },
        description: "Additional command line arguments to pass to the browser instance.",
        default: {},
        options: [
            {
                name: "args",
                displayName: "",
                values: [
                    {
                        displayName: "Argument",
                        name: "arg",
                        type: "string",
                        default: "",
                        description: "The command line argument to pass to the browser instance.",
                    },
                ],
            },
        ],
    },
    {
        displayName: "Viewport",
        name: "viewport",
        placeholder: "Add Viewport",
        type: "fixedCollection",
        typeOptions: {
            multipleValues: false,
        },
        default: {},
        options: [
            {
                name: "size",
                displayName: "",
                values: [
                    {
                        displayName: "Width",
                        name: "width",
                        type: "number",
                        default: 1920,
                    },
                    {
                        displayName: "Height",
                        name: "height",
                        type: "number",
                        default: 1080,
                    },
                ],
            },
        ],
    },
    {
        displayName: "Timeout",
        name: "timeout",
        type: "number",
        typeOptions: {
            minValue: 0,
        },
        default: 30,
        description: "Maximum navigation time in milliseconds. Pass 0 to disable timeout.",
    },
    {
        displayName: "Wait Until",
        name: "waitUntil",
        type: "options",
        options: [
            {
                name: "load",
                value: "load",
                description: "The load event is fired",
            },
            {
                name: "networkidle0",
                value: "networkidle0",
                description: "No more than 0 connections for at least 500 ms",
            },
            {
                name: "networkidle2",
                value: "networkidle2",
                description: "No more than 2 connections for at least 500 ms",
            },
        ],
        default: "load",
        description: "When to consider navigation succeeded.",
    },
    {
        displayName: "Time to Wait",
        name: "timeToWait",
        type: "number",
        typeOptions: {
            minValue: 0,
        },
        default: 30,
        description: "You can specify a time to wait (ms) before any action",
    },
    {
        displayName: "Wait for Selector",
        name: "waitForSelector",
        type: "string",
        default: "",
        description: "You can specify a time to wait (ms) before any action",
    },
    {
        displayName: "Page Caching",
        name: "pageCaching",
        type: "boolean",
        required: false,
        default: true,
        description: "Whether to enable page level caching. Defaults to true.",
    },
    {
        displayName: "Headless mode",
        name: "headless",
        type: "options",
        options: [
            {
                name: "New",
                value: "new",
                description: "Allow new headless mode",
            },
            {
                name: "Old",
                value: true,
                description: "Allow old headless mode",
            },
        ],
        required: false,
        default: 'new',
        description: "Whether to run browser in headless mode. Defaults to new.",
    },
    {
        displayName: "Stealth mode",
        name: "stealth",
        type: "boolean",
        required: false,
        default: true,
        description: "When enabled, applies various techniques to make detection of headless Puppeteer harder.",
    },
    {
        displayName: "Recaptcha resolver mode",
        name: "recapcha",
        type: "boolean",
        required: false,
        default: false,
        description: "When enabled, applies various techniques to make resolve recaptcha automatically.",
    },
    {
        displayName: "Proxy Server",
        name: "proxyServer",
        type: "string",
        required: false,
        default: "",
        description: "This tells Puppeteer to use a custom proxy configuration. Examples: localhost:8080, socks5://localhost:1080, etc.",
    },
    {
        displayName: "Inject HTML",
        name: "injectHtml",
        type: "string",
        required: false,
        typeOptions: {
            rows: 4,
        },
        default: "",
        description: "Custom HTML to inject",
    },
    {
        displayName: "Inject CSS",
        name: "injectCss",
        type: "string",
        required: false,
        typeOptions: {
            rows: 4,
        },
        default: "",
        description: "Custom CSS to inject",
    },
    {
        displayName: "Inject JS",
        name: "injectJs",
        type: "string",
        required: false,
        typeOptions: {
            rows: 4,
        },
        default: "",
        description: "Custom JS to inject",
    },
];
const nodeOptions = [
    {
        displayName: "Timeout",
        name: "timeout",
        type: "number",
        typeOptions: {
            minValue: 0,
        },
        default: 30,
        description: "Maximum navigation time in milliseconds. Pass 0 to disable timeout.",
    },
    {
        displayName: "Wait Until",
        name: "waitUntil",
        type: "options",
        options: [
            {
                name: "load",
                value: "load",
                description: "The load event is fired",
            },
            {
                name: "networkidle0",
                value: "networkidle0",
                description: "No more than 0 connections for at least 500 ms",
            },
            {
                name: "networkidle2",
                value: "networkidle2",
                description: "No more than 2 connections for at least 500 ms",
            },
        ],
        default: "load",
        description: "When to consider navigation succeeded.",
    },
    {
        displayName: "Time to Wait",
        name: "timeToWait",
        type: "number",
        typeOptions: {
            minValue: 0,
        },
        default: 0,
        description: "You can specify a time to wait (ms) before any action",
    },
    {
        displayName: "Wait for Selector",
        name: "waitForSelector",
        type: "string",
        default: "",
        description: "You can specify a time to wait (ms) before any action",
    },
    {
        displayName: "Inject HTML",
        name: "injectHtml",
        type: "string",
        required: false,
        typeOptions: {
            rows: 4,
        },
        default: "",
        description: "Custom HTML to inject",
    },
    {
        displayName: "Inject CSS",
        name: "injectCss",
        type: "string",
        required: false,
        typeOptions: {
            rows: 4,
        },
        default: "",
        description: "Custom CSS to inject",
    },
    {
        displayName: "Inject JS",
        name: "injectJs",
        type: "string",
        required: false,
        typeOptions: {
            rows: 4,
        },
        default: "",
        description: "Custom JS to inject",
    },
];
const sendKeyParameters = {
    displayName: "Send Keys",
    name: "sendKeys",
    placeholder: "Add Send Key",
    type: "fixedCollection",
    typeOptions: {
        multipleValues: true,
    },
    description: "The send key parameter.",
    default: {},
    required: false,
    options: [
        {
            name: "parameter",
            displayName: "Parameter",
            values: [
                {
                    displayName: "Key",
                    name: "key",
                    type: "string",
                    default: "",
                    description: "Key to send",
                    required: true,
                },
                {
                    displayName: "Send type",
                    name: "sendType",
                    type: "options",
                    required: false,
                    default: "press",
                    options: [
                        {
                            name: 'Press Up',
                            value: 'up',
                        },
                        {
                            name: 'Press Down',
                            value: 'down',
                        },
                        {
                            name: 'Press',
                            value: 'press',
                        },
                    ],
                    description: "Value of the parameter.",
                },
            ],
        },
    ],
};
const queryParameters = {
    displayName: "Query Parameters",
    name: "queryParameters",
    placeholder: "Add Parameter",
    type: "fixedCollection",
    typeOptions: {
        multipleValues: true,
    },
    description: "The query parameter to send.",
    default: {},
    options: [
        {
            name: "parameter",
            displayName: "Parameter",
            values: [
                {
                    displayName: "Name",
                    name: "name",
                    type: "string",
                    default: "",
                    description: "Name of the parameter.",
                },
                {
                    displayName: "Value",
                    name: "value",
                    type: "string",
                    default: "",
                    description: "Value of the parameter.",
                },
            ],
        },
    ],
};
const interactions = {
    displayName: "Interactions",
    name: "interactions",
    placeholder: "Add Interaction",
    type: "fixedCollection",
    typeOptions: {
        multipleValues: true,
    },
    description: "The interaction (click or field filling) to execute",
    default: {},
    options: [
        {
            name: "parameter",
            displayName: "Parameter",
            values: [
                {
                    displayName: "Selector",
                    name: "selector",
                    type: "string",
                    default: "",
                    description: "Name of the parameter.",
                },
                {
                    displayName: "Value (optional)",
                    name: "value",
                    type: "string",
                    default: "",
                    description: "If empty, Puppeteer will click on the selector, otherwise the value will be filled in the corresponding field",
                },
                Object.assign({}, sendKeyParameters),
                {
                    displayName: "Wait for navigation",
                    name: "waitForNavigation",
                    type: "boolean",
                    required: false,
                    default: false,
                    description: "If the click will trigger a page loading, set it to true to prevent actions during the loading",
                },
                {
                    displayName: "Time to Wait",
                    name: "timeToWait",
                    type: "number",
                    default: 0,
                    description: "You can specify a time to wait (ms) before any action",
                },
            ],
        },
    ],
};
const output = {
    displayName: "Output",
    name: "output",
    placeholder: "Select",
    type: "fixedCollection",
    typeOptions: {
        multipleValues: true,
    },
    description: "You can specify an output on the current node.",
    default: {},
    options: [
        {
            name: "getPageContent",
            displayName: "Page content",
            values: [
                {
                    displayName: "Property Name",
                    name: "dataPropertyName",
                    type: "string",
                    required: true,
                    default: "pageContent",
                    description: "Name of the json key to access the page content.",
                },
                {
                    displayName: "CSS selector",
                    description: "If a CSS selector is specified, the corresponding zone will be output",
                    name: "cssSelector",
                    type: "string",
                    default: "",
                },
                {
                    displayName: "Select All",
                    name: "selectAll",
                    type: "boolean",
                    required: false,
                    default: false,
                    description: "Instead of grabbing the first element matching the CSS selector, all matching elements will be returned",
                },
                {
                    displayName: "innerHTML",
                    name: "innerHtml",
                    type: "boolean",
                    displayOptions: {
                        show: {
                            htmlToJson: [false],
                        },
                    },
                    required: false,
                    default: false,
                    description: "By default outerHTML is used for CSS selector. Doesn't apply when HTML to JSON is active",
                },
                {
                    displayName: "HTML to JSON",
                    name: "htmlToJson",
                    type: "boolean",
                    required: false,
                    default: false,
                    description: "Convert HTML nodes to JSON",
                },
                {
                    displayName: "No attributes",
                    name: "noAttributes",
                    type: "boolean",
                    displayOptions: {
                        show: {
                            htmlToJson: [true],
                        },
                    },
                    required: false,
                    default: false,
                    description: "Ignore HTML attributes while converting to JSON",
                },
            ],
        },
        {
            name: "getScreenshot",
            displayName: "Screenshot",
            values: [
                {
                    displayName: "Property Name",
                    name: "dataPropertyName",
                    type: "string",
                    required: true,
                    default: "data",
                    description: "Name of the binary property in which  to store the image or PDF data.",
                },
                {
                    displayName: "CSS selector",
                    description: "If a CSS selector is specified, the corresponding zone will be output.",
                    name: "cssSelector",
                    type: "string",
                    default: "",
                },
                {
                    displayName: "Type",
                    name: "imageType",
                    type: "options",
                    options: [
                        {
                            name: "JPEG",
                            value: "jpeg",
                        },
                        {
                            name: "PNG",
                            value: "png",
                        },
                        {
                            name: "WebP",
                            value: "webp",
                        },
                    ],
                    default: "png",
                    description: "The image type to use. PNG, JPEG, and WebP are supported.",
                },
                {
                    displayName: "Quality",
                    name: "quality",
                    type: "number",
                    typeOptions: {
                        minValue: 0,
                        maxValue: 100,
                    },
                    displayOptions: {
                        hide: {
                            imageType: ["png"],
                        },
                    },
                    default: 100,
                    description: "The quality of the image, between 0-100. Not applicable to png images.",
                },
                {
                    displayName: "Full Page",
                    name: "fullPage",
                    type: "boolean",
                    required: true,
                    default: false,
                    description: "When true, takes a screenshot of the full scrollable page. If a CSS selector is specified, this parameter will be ignored.",
                },
            ],
        },
        {
            name: "getPDF",
            displayName: "PDF",
            values: [
                {
                    displayName: "Property Name",
                    name: "dataPropertyName",
                    type: "string",
                    required: true,
                    default: "page",
                    description: "Name of the binary property in which  to store the image or PDF data.",
                },
                {
                    displayName: "Page Ranges",
                    name: "pageRanges",
                    type: "string",
                    required: false,
                    default: "",
                    description: "Paper ranges to print, e.g. 1-5, 8, 11-13.",
                },
                {
                    displayName: "Scale",
                    name: "scale",
                    type: "number",
                    typeOptions: {
                        minValue: 0.1,
                        maxValue: 2,
                    },
                    default: 1.0,
                    required: true,
                    description: "Scales the rendering of the web page. Amount must be between 0.1 and 2.",
                },
                {
                    displayName: "Prefer CSS Page Size",
                    name: "preferCSSPageSize",
                    type: "boolean",
                    required: true,
                    default: true,
                    description: "Give any CSS @page size declared in the page priority over what is declared in the width or height or format option.",
                },
                {
                    displayName: "Format",
                    name: "format",
                    type: "options",
                    options: [
                        {
                            name: "Letter",
                            value: "Letter",
                            description: "8.5in x 11in",
                        },
                        {
                            name: "Legal",
                            value: "Legal",
                            description: "8.5in x 14in",
                        },
                        {
                            name: "Tabloid",
                            value: "Tabloid",
                            description: "11in x 17in",
                        },
                        {
                            name: "Ledger",
                            value: "Ledger",
                            description: "17in x 11in",
                        },
                        {
                            name: "A0",
                            value: "A0",
                            description: "33.1in x 46.8in",
                        },
                        {
                            name: "A1",
                            value: "A1",
                            description: "23.4in x 33.1in",
                        },
                        {
                            name: "A2",
                            value: "A2",
                            description: "16.54in x 23.4in",
                        },
                        {
                            name: "A3",
                            value: "A3",
                            description: "11.7in x 16.54in",
                        },
                        {
                            name: "A4",
                            value: "A4",
                            description: "8.27in x 11.7in",
                        },
                        {
                            name: "A5",
                            value: "A5",
                            description: "5.83in x 8.27in",
                        },
                        {
                            name: "A6",
                            value: "A6",
                            description: "4.13in x 5.83in",
                        },
                    ],
                    default: "Letter",
                    description: "Valid paper format types when printing a PDF. eg: Letter, A4",
                },
                {
                    displayName: "Height",
                    name: "height",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Sets the height of paper. You can pass in a number or a string with a unit.",
                },
                {
                    displayName: "Width",
                    name: "width",
                    type: "string",
                    default: "",
                    required: false,
                    description: "Sets the width of paper. You can pass in a number or a string with a unit.",
                },
                {
                    displayName: "Landscape",
                    name: "landscape",
                    type: "boolean",
                    required: true,
                    default: true,
                    description: "Whether to show the header and footer.",
                },
                {
                    displayName: "Margin",
                    name: "margin",
                    type: "collection",
                    placeholder: "Add Margin",
                    default: {},
                    description: "Set the PDF margins.",
                    options: [
                        {
                            displayName: "Top",
                            name: "top",
                            type: "string",
                            default: "",
                            required: false,
                        },
                        {
                            displayName: "Bottom",
                            name: "bottom",
                            type: "string",
                            default: "",
                            required: false,
                        },
                        {
                            displayName: "Left",
                            name: "left",
                            type: "string",
                            default: "",
                            required: false,
                        },
                        {
                            displayName: "Right",
                            name: "right",
                            type: "string",
                            default: "",
                            required: false,
                        },
                    ],
                },
                {
                    displayName: "Display Header/Footer",
                    name: "displayHeaderFooter",
                    type: "boolean",
                    required: true,
                    default: false,
                    description: "Whether to show the header and footer.",
                },
                {
                    displayName: "Header Template",
                    name: "headerTemplate",
                    typeOptions: {
                        rows: 5,
                    },
                    type: "string",
                    default: ``,
                    description: `HTML template for the print header. Should be valid HTML with the following classes used to inject values into them: - date formatted print date

								- title document title

								- url document location

								- pageNumber current page number

								- totalPages total pages in the document`,
                    noDataExpression: true,
                },
                {
                    displayName: "Footer Template",
                    name: "footerTemplate",
                    typeOptions: {
                        rows: 5,
                    },
                    type: "string",
                    default: ``,
                    description: `HTML template for the print footer. Should be valid HTML with the following classes used to inject values into them: - date formatted print date`,
                    noDataExpression: true,
                },
                {
                    displayName: "Transparent Background",
                    name: "omitBackground",
                    type: "boolean",
                    required: true,
                    default: false,
                    description: "Hides default white background and allows generating pdfs with transparency.",
                },
                {
                    displayName: "Background Graphics",
                    name: "printBackground",
                    type: "boolean",
                    required: true,
                    default: false,
                    description: "Set to true to include background graphics.",
                },
            ],
        },
        {
            name: "getCookie",
            displayName: "Get cookies",
            values: [
                {
                    displayName: "Property Name",
                    name: "dataPropertyName",
                    type: "string",
                    required: true,
                    default: "pageCookies",
                    description: "Name of the json key to access the page cookies.",
                },
            ],
        },
    ],
};
exports.nodeDescription = {
    displayName: "Puppeteer",
    name: "puppeteer",
    group: ["puppeteer"],
    version: 1,
    description: "Request a webpage using Puppeteer",
    defaults: {
        name: "Puppeteer",
        color: "#125580",
    },
    icon: "file:puppeteer.svg",
    inputs: ["main"],
    outputs: ["main"],
    credentials: [
        {
            name: "n8nApi",
            required: true,
        },
    ],
    properties: [
        {
            displayName: "Global options",
            name: "globalOptions",
            type: "collection",
            placeholder: "Add Option",
            default: {
                headless: 'new',
                launchArguments: { args: [{ arg: '--no-sandbox' }] },
                stealth: true
            },
            options: [...globalOptions],
            description: "These options must be set on the first puppeteer node in your workflow, they apply to all puppeteer nodes. Any global option set after puppeteer has been initialized will be ignored.",
        },
        {
            displayName: "Node options",
            name: "nodeOptions",
            type: "collection",
            placeholder: "Add Option",
            default: {},
            options: [...nodeOptions],
            description: "These options apply only on this node and will override any existing global option.",
        },
        {
            displayName: "URL",
            name: "url",
            type: "string",
            default: "",
            description: "Leave the field empty if you want to stay on the current URL (must be set on the first Puppeteer node).",
        },
        Object.assign({}, queryParameters),
        Object.assign({}, interactions),
        Object.assign({}, output),
    ],
};
//# sourceMappingURL=Puppeteer.node.options.js.map