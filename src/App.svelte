<script>
    import FlickeringGrid from '$lib/components/FlickeringGrid.svelte';

    let activeBlock = $state(null);
    let selectedPain = $state("");
    let selectedService = $state("");
    let contactInput = $state("");

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

<div class="relative min-h-screen overflow-x-hidden font-sans bg-[#030303] text-[#f4f4f5]">

    <!-- Flickering Grid фон -->
    <div class="fixed inset-0 z-0 pointer-events-none">
        <FlickeringGrid
            color="rgb(0, 242, 254)"
            maxOpacity={0.07}
            flickerChance={0.15}
            squareSize={3}
            gridGap={8}
            class="w-full h-full"
        />
        <!-- Градиент поверх чтобы не было слишком навязчиво -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#030303]/30 via-transparent to-[#030303]/60"></div>
    </div>

    <!-- ══════════════════════ HERO ══════════════════════ -->
    <section class="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 z-10">
        <div class="max-w-[1100px] mx-auto w-full">

            <!-- Eyebrow -->
            <div class="flex items-center gap-3 mb-6">
                <div class="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe] animate-pulse"></div>
                <span class="text-[11px] font-mono text-[#00f2fe] tracking-[0.22em] uppercase">Growth Architecture · Phuket</span>
            </div>

            <!-- Headline -->
            <h1 class="font-black tracking-tighter uppercase leading-[0.88] mb-6 select-none"
                style="font-size: clamp(2.8rem, 12vw, 7.5rem)">
                <span
                    class="block bg-gradient-to-b from-white to-[#555] bg-clip-text text-transparent cursor-pointer transition-all duration-200 hover:from-[#00f2fe] hover:to-[#007a87]"
                    onmouseenter={() => triggerHyperText(0)}
                    ontouchstart={() => triggerHyperText(0)}
                >{word0}</span>
                <span
                    class="block bg-gradient-to-b from-white to-[#555] bg-clip-text text-transparent cursor-pointer transition-all duration-200 hover:from-[#00f2fe] hover:to-[#007a87]"
                    onmouseenter={() => triggerHyperText(1)}
                    ontouchstart={() => triggerHyperText(1)}
                >{word1}</span>
                <span
                    class="block cursor-pointer transition-all duration-200"
                    style="font-size: clamp(1.8rem, 7vw, 4.5rem); color: #00f2fe; opacity: 0.7; font-style: italic;"
                    onmouseenter={() => triggerHyperText(2)}
                    ontouchstart={() => triggerHyperText(2)}
                >{word2}</span>
            </h1>

            <!-- Sub -->
            <p class="text-sm md:text-lg text-[#8e8e93] max-w-[500px] leading-relaxed mb-8 font-light">
                Stop running blind. I transform fragmented marketing data and CRM chaos into autonomous intelligence systems that leave competitors chasing your tail.
            </p>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-3">
                <button
                    onclick={() => scrollToForm('Express Audit')}
                    class="group relative overflow-hidden border border-[#2a2a2a] text-white px-6 py-3 rounded-xl font-mono text-sm tracking-wider transition-all hover:border-[#00f2fe] hover:shadow-[0_0_25px_rgba(0,242,254,0.15)] active:scale-[0.97] bg-[#030303]/80 backdrop-blur-sm"
                >
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    [EXECUTE_EXPRESS_AUDIT]
                </button>
                <button
                    onclick={() => scrollToForm('Full Transformation')}
                    class="relative overflow-hidden bg-[#f4f4f5] text-black px-6 py-3 rounded-xl font-mono text-sm font-bold transition-all hover:bg-[#00f2fe] hover:shadow-[0_0_40px_rgba(0,242,254,0.3)] active:scale-[0.97] btn-pulse"
                >
                    FULL_TRANSFORMATION →
                </button>
            </div>
        </div>

        <!-- Scroll hint -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 pointer-events-none">
            <div class="w-px h-8 bg-gradient-to-b from-transparent to-[#00f2fe] animate-pulse"></div>
            <span class="text-[9px] font-mono text-[#00f2fe] tracking-[0.3em]">SCROLL</span>
        </div>
    </section>

    <!-- ══════════════════════ SERVICES ══════════════════════ -->
    <section class="relative px-6 pb-16 max-w-[1100px] mx-auto z-10">

        <div class="flex items-center gap-4 mb-6">
            <div class="h-px flex-1 bg-gradient-to-r from-transparent to-[#1e1e24]"></div>
            <span class="text-[10px] font-mono text-[#333] tracking-[0.25em] uppercase shrink-0">Services</span>
            <div class="h-px flex-1 bg-gradient-to-l from-transparent to-[#1e1e24]"></div>
        </div>

        <div class="flex flex-col gap-3">
            {#each services as svc}
                <div class="rounded-2xl border overflow-hidden transition-all duration-300 backdrop-blur-sm
                    {activeBlock === svc.id
                        ? 'border-[#00f2fe]/40 bg-[#030303]/90 shadow-[0_0_30px_rgba(0,242,254,0.05)]'
                        : 'border-[#1e1e24] bg-[#09090b]/90'}
                    {activeBlock !== null && activeBlock !== svc.id ? 'opacity-40' : ''}
                ">
                    <button
                        onclick={() => activeBlock = (activeBlock === svc.id ? null : svc.id)}
                        class="w-full flex items-center justify-between p-5 md:p-6 text-left outline-none active:opacity-75"
                    >
                        <div class="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-5">
                            <span class="text-[10px] font-mono text-[#00f2fe] tracking-[0.2em] shrink-0">{svc.tag}</span>
                            <h3 class="text-base md:text-lg font-bold">{svc.title}</h3>
                        </div>
                        <div class="shrink-0 ml-4 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300
                            {activeBlock === svc.id ? 'border-[#00f2fe] rotate-45 bg-[#00f2fe]/10' : 'border-[#2a2a2a]'}
                        ">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M5 1V9M1 5H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </button>

                    {#if activeBlock === svc.id}
                        <div class="px-5 md:px-6 pb-6 animate-[blurFade_0.35s_cubic-bezier(0.16,1,0.3,1)]">
                            <div class="h-px bg-[#1e1e24] mb-5"></div>
                            <h4 class="text-lg font-bold mb-3 text-white">{svc.heading}</h4>
                            <p class="text-[#8e8e93] leading-relaxed mb-5 text-sm md:text-base">{svc.body}</p>
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

    <!-- ══════════════════════ FORM ══════════════════════ -->
    <section id="friction-form" class="relative px-6 pb-20 max-w-[750px] mx-auto z-10">
        <div class="bg-[#09090b]/90 backdrop-blur-sm border border-[#1e1e24] rounded-3xl p-7 md:p-10 relative overflow-hidden transition-all duration-500 hover:border-[#00f2fe]/20">
            <div class="absolute -top-20 -right-20 w-56 h-56 bg-[#00f2fe]/4 rounded-full blur-3xl pointer-events-none"></div>
            <div class="relative z-10">
                <span class="text-[10px] font-mono text-[#00f2fe] tracking-[0.25em] uppercase mb-4 block">Initiate Contact</span>
                <h2 class="text-2xl md:text-3xl font-bold tracking-tight mb-2">Where is the friction?</h2>
                <p class="text-[#8e8e93] mb-6 text-sm md:text-base">Select your primary bottleneck to initialize the solution architecture.</p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {#each painPoints as pain}
                        <button
                            type="button"
                            onclick={() => selectedPain = pain}
                            class="p-3.5 rounded-xl border text-left text-sm font-medium transition-all active:scale-[0.97]
                                {selectedPain === pain
                                    ? 'border-[#00f2fe] bg-[#060d0c] text-white shadow-[0_0_20px_rgba(0,242,254,0.07)]'
                                    : 'border-[#1e1e24] text-[#8e8e93] hover:border-zinc-700'}"
                        >{pain}</button>
                    {/each}
                </div>

                <div class="space-y-4">
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
                            class="w-full bg-black border border-[#1e1e24] rounded-xl p-3.5 text-white focus:outline-none focus:border-[#00f2fe] transition-all font-mono text-sm placeholder-zinc-800"
                        />
                    </div>
                    <button
                        type="button"
                        class="w-full bg-white text-black p-3.5 rounded-xl font-bold text-sm transition-all hover:bg-[#00f2fe] hover:shadow-[0_0_30px_rgba(0,242,254,0.2)] active:scale-[0.98]"
                    >
                        Request Architecture Brief
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- ══════════════════════ FOOTER ══════════════════════ -->
    <footer class="relative border-t border-[#1e1e24] px-6 py-6 max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 z-10">
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
        0%   { filter: blur(6px); opacity: 0; transform: translateY(8px); }
        100% { filter: blur(0);   opacity: 1; transform: translateY(0); }
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
