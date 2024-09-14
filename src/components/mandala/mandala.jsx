export function Mandala() {
    return(
        <div>
            <svg width="300" height="300" viewBox="0 0 100 100">
                <defs>
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <text font-size="6" font-family="monospace" c>
                <textPath href="#circlePath" startOffset="0" className="text-light">
                    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    ∫    
                </textPath>
                </text>
            </svg>
        </div>
    )
}