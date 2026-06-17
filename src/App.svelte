<script>
    let activeBlock = $state(null);
    let selectedPain = $state("");
    let selectedService = $state("");
    let contactInput = $state("");
    let mouseX = $state(50);
    let mouseY = $state(50);

    function handleMouseMove(e) {
        mouseX = (e.clientX / window.innerWidth) * 100;
        mouseY = (e.clientY / window.innerHeight) * 100;
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#$@*0123456789";
    let word0 = $state("Optimize.");
    let word1 = $state("Automate.");
    let word2 = $state("Outmaneuver.");
    const targets = ["Optimize.", "Automate.", "Outmaneuver."];

    function triggerHyperText(index) {
        let iterations = 0;
        const targetWord = targets[index];
        const interval = setInterval(() => {
            const nextValue = targetWord.split("").map((letter, idx) => {
                if (idx < iterations) return targetWord[idx];
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");
            if (index === 0) word0 = nextValue;
            if (index === 1) word1 = nextValue;
            if (index === 2) word2 = nextValue;
            if (iterations >= targetWord.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    }

    function scrollToForm(serviceName) {
        selectedService = serviceName;
        const el = document.getElementById("friction-form");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    const services = [
        {
            id: 1,
            tag: "01 / TRAFFIC & DATA",
            title: "Performance Audit",
            heading: "Performance & Architecture Leak Detection",
            body: "Deep analytical drill-down into your current business systems. I trace every lead, audit your ad pixel health, map your CRM pipelines, and isolate exactly where your marketing budget is leaking. You get a bulletproof blueprint for optimization.",
            terms: "Complimentary for Qualified Businesses",
            cta: "Apply for Audit →",
            service: "Performance Audit"
        },
        {
            id: 2,
            tag: "02 / INFRASTRUCTURE",
            title: "Advanced CRM Engineering",
            heading: "Advanced CRM & Pipeline Engineering",
            body: "Transforming manual operational chaos into an automated revenue machine. I architect seamless database structures, implement end-to-end event tracking, and build zero-friction lead routing workflows in your CRM. No lost leads, no human errors.",
            terms: "Pricing: Bespoke / Project-Based",
            cta: "Request Architecture Brief →",
            service: "CRM Engineering"
        },
        {
            id: 3,
            tag: "03 / AI CORE",
            title: "Autonomous Retention",
            heading: "Autonomous Core & Retention Loops",
            body: "Deploying production-grade AI agents and smart algorithms directly into your business ecosystem. Automated 24/7 lead qualification, intelligent conversational flows, and algorithmic behavioral triggers that extract maximum recurring revenue from your existing client base on autopilot.",
            terms: "Pricing: Bespoke / Project-Based",
            cta: "Integrate AI Core →",
            service: "AI Core Integration"
        }
    ];

    const painPoints = [
        "Wasting Marketing Budget",
        "CRM Chaos & Leaky Pipes",
        "Dead Database & Low LTV",
        "Ready for AI Automation"
    ];
</script>

<div
    onmousemove={handleMouseMove}
    class="relative min-h-screen overflow-x-hidden font-sans bg-[#030303] text-[#f4f4f5]"
>
    <div
        class="fixed inset-0 pointer-events-none z-0 hidden md:block"
        style="background: radial-gradient(circle 600px at {mouseX}% {mouseY}%, rgba(0,242,254,0.04), transparent 80%)"
    ></div>

    <section class="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 overflow-hidden">

        <div class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 md:translate-x-1/4
                    w-[380px] h-[380px] md:w-[600px] md:h-[600px]
                    pointer-events-none select-none opacity-50 md:opacity-40">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 600 600" fill="none">
                <circle cx="300" cy="300" r="80"  stroke="#00f2fe" stroke-width="0.5" stroke-opacity="0.4"/>
                <circle cx="300" cy="300" r="160" stroke="#00f2fe" stroke-width="0.5" stroke-opacity="0.25"/>
                <circle cx="300" cy="300" r="240" stroke="#00f2fe" stroke-width="0.5" stroke-opacity="0.15"/>
                <circle cx="300" cy="300" r="295" stroke="#00f2fe" stroke-width="0.5" stroke-opacity="0.08"/>
                <line x1="5"   y1="300" x2="595" y2="300" stroke="#00f2fe" stroke-width="0.5" stroke-opacity="0.15"/>
                <line x1="300" y1="5"   x2="300" y2="595" stroke="#00f2fe" stroke-width="0.5" stroke-opacity="0.15"/>
                <line x1="87"  y1="87"  x2="513" y2="513" stroke="#00f2fe" stroke-width="0.5" stroke-opacity="0.08"/>
                <line x1="513" y1="87"  x2="87"  y2="513" stroke="#00f2fe" stroke-width="0.5" stroke-opacity="0.08"/>
                <circle cx="300" cy="140" r="2.5" fill="#00f2fe" fill-opacity="0.7"/>
                <circle cx="420" cy="230" r="2"   fill="#00f2fe" fill-opacity="0.5"/>
                <circle cx="190" cy="390" r="2.5" fill="#00f2fe" fill-opacity="0.4"/>
                <circle cx="460" cy="370" r="1.5" fill="#00f2fe" fill-opacity="0.8"/>
                <circle cx="150" cy="250" r="1.5" fill="#00f2fe" fill-opacity="0.3"/>
                <circle cx="355" cy="460" r="2"   fill="#00f2fe" fill-opacity="0.5"/>
            </svg>
            <div class="absolute inset-0 rounded-full overflow-hidden">
                <div class="radar-sweep absolute inset-0"></div>
            </div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00f2fe] shadow-[0_0_12px_#00f2fe,0_0_24px_rgba(0,242,254,0.4)]"></div>
        </div>

        <div class="relative z-10 max-w-[1100px] mx-auto w-full">
            <div class="flex items-center gap-3 mb-8">
                <div class="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe] animate-pulse"></div>
                <span class="text-[11px] font-mono text-[#00f2fe] tracking-[0.22em] uppercase">Growth Architecture · Phuket</span>
            </div>

            <h1 class="font-black tracking-tighter uppercase leading-[0.88] mb-8 select-none"
                style="font-size: clamp(3rem, 13vw, 7.5rem)">
                <span
                    class="block bg-gradient-to-b from-white to-[#555] bg-clip-text text-transparent cursor-pointer transition-all duration-200 hover:from-[#00f2fe] hover:to-[#00a8b5]"
                    onmouseenter={() => triggerHyperText(0)}
                    ontouchstart={() => triggerHyperText(0)}
                >{word0}</span>
                <span
                    class="block bg-gradient-to-b from-white to-[#555] bg-clip-text text-transparent cursor-pointer transition-all duration-200 hover:from-[#00f2fe] hover:to-[#00a8b5]"
                    onmouseenter={() => triggerHyperText(1)}
                    ontouchstart={() => triggerHyperText(1)}
                >{word1}</span>
                <span
                    class="block text-[#00f2fe] cursor-pointer drop-shadow-[0_0_30px_rgba(0,242,254,0.4)]"
                    onmouseenter={() => triggerHyperText(2)}
                    ontouchstart={() => triggerHyperText(2)}
                >{word2}</span>
            </h1>

            <p class="text-base md:text-xl text-[#8e8e93] max-w-[540px] leading-relaxed mb-10 font-light">
                Stop running blind. I transform fragmented marketing data and CRM chaos into autonomous intelligence systems that leave competitors chasing your tail.
            </p>

            <div class="flex flex-col sm:flex-row gap-3">
                <button
                    onclick={() => scrollToForm('Express Audit')}
                    class="group relative overflow-hidden border border-[#2a2a2a] text-white px-7 py-3.5 rounded-xl font-mono text-sm tracking-wider transition-all hover:border-[#00f2fe] hover:shadow-[0_0_25px_rgba(0,242,254,0.15)] active:scale-[0.97]"
                >
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    [EXECUTE_EXPRESS_AUDIT]
                </button>
                <button
                    onclick={() => scrollToForm('Full Transformation')}
                    class="relative overflow-hidden bg-[#f4f4f5] text-black px-7 py-3.5 rounded-xl font-mono text-sm font-bold transition-all hover:bg-[#00f2fe] hover:shadow-[0_0_40px_rgba(0,242,254,0.3)] active:scale-[0.97] btn-pulse"
                >
                    FULL_TRANSFORMATION →
                </button>
            </div>
        </div>

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25 pointer-events-none">
            <div class="w-px h-10 bg-gradient-to-b from-transparent to-[#00f2fe] animate-pulse"></div>
            <span class="text-[9px] font-mono text-[#00f2fe] tracking-[0.3em]">SCROLL</span>
        </div>
    </section>

    <section class="px-6 pb-24 max-w-[1100px] mx-auto">
        <div class="flex items-center gap-4 mb-8">
            <div class="h-px flex-1 bg-gradient-to-r from-transparent to-[#1e1e24]"></div>
            <span class="text-[10px] font-mono text-[#333] tracking-[0.25em] uppercase shrink-0">Services</span>
            <div class="h-px flex-1 bg-gradient-to-l from-transparent to-[#1e1e24]"></div>
        </div>

        <div class="flex flex-col gap-3">
            {#each services as svc}
                <div class="rounded-2xl border overflow-hidden transition-all duration-400
                    {activeBlock === svc.id
                        ? 'border-[#00f2fe]/40 bg-[#060d0c] shadow-[0_0_30px_rgba(0,242,254,0.05)]'
                        : 'border-[#1e1e24] bg-[#09090b]'}
                    {activeBlock !== null && activeBlock !== svc.id ? 'opacity-40' : ''}
                ">
                    <button
                        onclick={() => activeBlock = (activeBlock === svc.id ? null : svc.id)}
                        class="w-full flex items-center justify-between p-5 md:p-7 text-left outline-none active:opacity-75"
                    >
                        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                            <span class="text-[10px] font-mono text-[#00f2fe] tracking-[0.2em] shrink-0">{svc.tag}</span>
                            <h3 class="text-base md:text-lg font-bold">{svc.title}</h3>
                        </div>
                        <div class="shrink-0 ml-4 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300
                            {activeBlock === svc.id ? 'border-[#00f2fe] rotate-45 bg-[#00f2fe]/10' : 'border-[#2a2a2a]'}
                        ">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M5.5 1V10M1 5.5H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </button>

                    {#if activeBlock === svc.id}
                        <div class="px-5 md:px-7 pb-7 animate-[blurFade_0.35s_cubic-bezier(0.16,1,0.3,1)]">
                            <div class="h-px bg-[#1e1e24] mb-6"></div>
                            <h4 class="text-lg md:text-xl font-bold mb-3 text-white">{svc.heading}</h4>
                            <p class="text-[#8e8e93] leading-relaxed mb-6 text-sm md:text-base">{svc.body}</p>
                            <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                                <span class="text-xs font-mono text-zinc-600">{svc.terms}</span>
                                <button
                                    onclick={() => scrollToForm(svc.service)}
                                    class="text-[#00f2fe] font-bold text-sm hover:text-white transition-colors shrink-0 active:opacity-60"
                                >{svc.cta}</button>
                            </div>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </section>

    <section id="friction-form" class="px-6 pb-32 max-w-[750px] mx-auto">
        <div class="bg-[#09090b] border border-[#1e1e24] rounded-3xl p-7 md:p-12 relative overflow-hidden transition-all duration-500 hover:border-[#00f2fe]/20">
            <div class="absolute -top-20 -right-20 w-56 h-56 bg-[#00f2fe]/4 rounded-full blur-3xl pointer-events-none"></div>
            <div class="relative z-10">
                <span class="text-[10px] font-mono text-[#00f2fe] tracking-[0.25em] uppercase mb-5 block">Initiate Contact</span>
                <h2 class="text-2xl md:text-3xl font-bold tracking-tight mb-2">Where is the friction?</h2>
                <p class="text-[#8e8e93] mb-8 text-sm md:text-base">Select your primary bottleneck to initialize the solution architecture.</p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {#each painPoints as pain}
                        <button
                            type="button"
                            onclick={() => selectedPain = pain}
                            class="p-4 rounded-xl border text-left text-sm font-medium transition-all active:scale-[0.97]
                                {selectedPain === pain
                                    ? 'border-[#00f2fe] bg-[#060d0c] text-white shadow-[0_0_20px_rgba(0,242,254,0.07)]'
                                    : 'border-[#1e1e24] text-[#8e8e93] hover:border-zinc-700'}"
                        >{pain}</button>
                    {/each}
                </div>

                <div class="space-y-5">
                    {#if selectedService}
                        <div class="text-[10px] font-mono text-zinc-600 uppercase tracking-widest animate-[blurFade_0.2s_ease-out]">
                            Flow: <span class="text-[#00f2fe]">{selectedService}</span>
                        </div>
                    {/if}
                    <div>
                        <label for="contact" class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-2">Telegram or Email</label>
                        <input
                            id="contact"
                            type="text"
                            bind:value={contactInput}
                            placeholder="@username or email"
                            class="w-full bg-black border border-[#1e1e24] rounded-xl p-4 text-white focus:outline-none focus:border-[#00f2fe] transition-all font-mono text-sm placeholder-zinc-800"
                        />
                    </div>
                    <button
                        type="button"
                        class="w-full bg-white text-black p-4 rounded-xl font-bold text-sm transition-all hover:bg-[#00f2fe] hover:shadow-[0_0_30px_rgba(0,242,254,0.2)] active:scale-[0.98]"
                    >
                        Request Architecture Brief
                    </button>
                </div>
            </div>
        </div>
    </section>

    <footer class="border-t border-[#1e1e24] px-6 py-8 max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <p class="text-xs text-[#333] font-mono">© 2026 tsvetkov.site · All systems operational.</p>
        <div class="flex gap-6 text-sm text-[#8e8e93]">
            <a href="https://t.me/advertisment_th" target="_blank" class="hover:text-[#00f2fe] transition-colors">Telegram</a>
            <a href="#" class="hover:text-[#00f2fe] transition-colors">Instagram</a>
            <a href="#" class="hover:text-[#00f2fe] transition-colors">Threads</a>
            <a href="#" class="hover:text-[#00f2fe] transition-colors">TikTok</a>
        </div>
    </footer>
</div>

<style>
    @keyframes shimmer {
        100% { transform: translateX(250%); }
    }
    @keyframes blurFade {
        0%   { filter: blur(6px); opacity: 0; transform: translateY(10px); }
        100% { filter: blur(0);   opacity: 1; transform: translateY(0); }
    }
    @keyframes radarSpin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
    }
    .radar-sweep {
        background: conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(0, 242, 254, 0.18) 25deg,
            rgba(0, 242, 254, 0.08) 45deg,
            transparent 65deg
        );
        animation: radarSpin 4s linear infinite;
    }
    .btn-pulse {
        position: relative;
    }
    .btn-pulse::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 12px;
        pointer-events: none;
        animation: pulseShadow 2.5s ease-in-out infinite;
    }
    @keyframes pulseShadow {
        0%   { box-shadow: 0 0 0 0    rgba(0, 242, 254, 0.35); }
        70%  { box-shadow: 0 0 0 14px rgba(0, 242, 254, 0); }
        100% { box-shadow: 0 0 0 0    rgba(0, 242, 254, 0); }
    }
</style>
