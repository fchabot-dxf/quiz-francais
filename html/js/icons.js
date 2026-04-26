import htm from 'https://unpkg.com/htm?module';
const html = htm.bind(React.createElement);

const Icon = ({ children, size = 24, className, viewBox = "0 0 24 24", strokeWidth = 2 }) => html`
    <span className=${className}>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width=${size} 
            height=${size} 
            viewBox=${viewBox} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth=${strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            ${children}
        </svg>
    </span>
`;

export const BrainCircuit = (props) => html`
    <${Icon} ...${props}>
        <path d="M12 4.5V4a2 2 0 0 0-4 0v.5"/>
        <path d="M20 11a8 8 0 0 0-16 0"/>
        <path d="M17.6 20.5a9.7 9.7 0 0 0 1.4-1.5"/>
        <path d="M6.4 20.5a9.7 9.7 0 0 1-1.4-1.5"/>
        <path d="M12 11V5"/>
        <path d="M12 21v-4"/>
        <path d="M16 11l-3 3"/>
        <path d="M8 11l3 3"/>
    <//>
`;

export const BookOpen = (props) => html`
    <${Icon} ...${props}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    <//>
`;

export const CheckCircle2 = (props) => html`
    <${Icon} ...${props}>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m9 12 2 2 4-4"/>
    <//>
`;

export const XCircle = (props) => html`
    <${Icon} ...${props}>
        <circle cx="12" cy="12" r="10"/>
        <path d="m15 9-6 6"/>
        <path d="m9 9 6 6"/>
    <//>
`;

export const ArrowRight = (props) => html`
    <${Icon} ...${props}>
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
    <//>
`;

export const RotateCcw = (props) => html`
    <${Icon} ...${props}>
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
    <//>
`;

export const Trophy = (props) => html`
    <${Icon} ...${props}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    <//>
`;

export const ChevronRight = (props) => html`
    <${Icon} ...${props}>
        <path d="m9 18 6-6-6-6"/>
    <//>
`;

export const Info = (props) => html`
    <${Icon} ...${props}>
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
    <//>
`;

export const ExternalLink = (props) => html`
    <${Icon} ...${props}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
    <//>
`;

export const X = (props) => html`
    <${Icon} ...${props}>
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    <//>
`;

export const GraduationCap = (props) => html`
    <${Icon} ...${props}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    <//>
`;

export const Pen = (props) => html`
    <${Icon} ...${props}>
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
        <path d="m15 5 4 4"/>
    <//>
`;

export const Check = (props) => html`
    <${Icon} ...${props} viewBox="0 0 100 100">
        <path 
            d="M20,50 L40,80 L85,15" 
            stroke="#ef4444" 
            strokeWidth="12" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
        />
        <path 
            d="M85,15 L95,5" 
            stroke="#ef4444" 
            strokeWidth="4" 
            strokeLinecap="round" 
            fill="none"
        />
    <//>
`;

export const Settings = (props) => html`
    <${Icon} ...${props}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
    <//>
`;
