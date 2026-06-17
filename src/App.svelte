<script>
    import FlickeringGrid from './lib/components/FlickeringGrid.svelte';

    let activeBlock = $state(null);
    let selectedService = $state("");
    let contactInput = $state("");
    
    // Новые состояния для кастомной формы связи
    let messengerType = $state("Telegram");
    
    // Реактивное изменение подсказки (placeholder) в зависимости от выбранного мессенджера
    let inputPlaceholder = $derived(
        messengerType === "Telegram" || messengerType === "Instagram" 
            ? "укажите логин" 
            : "укажите номер телефона"
    );

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#$@*0123456789";
    let word0 = $state("Optimize");
    let word1 = $state("Automate");
    let word2 = $state("Outmaneuver");
    const targets = ["Optimize", "Automate", "Outmaneuver"];

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
</script>

<div class="relative min-h-screen overflow-x-hidden font-sans bg-[#030303] text-[#f4f4f5]">

    <div class="fixed inset-0 z-0 pointer-events-none">
        <FlickeringGrid
            color="rgb(0, 242, 254)"
            maxOpacity={0.15} 
            flickerChance={0.20}
            squareSize={3}
            gridGap={8}
            class="w-full h-full"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#030303]/10 via-transparent to-[#030303]/60"></div>
    </div>

    <div class="max-w-[1100px] mx-auto px-6 relative z-10">
        
        <section class="relative pt-24 pb-12 flex flex-col justify-center">
            <div class="flex items-center gap-3 mb-4">
                <div class="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe] animate-pulse"></div>
                <span class="text-[11px] font-mono text-[#00f2fe] tracking-[0.22em] uppercase">Growth Architecture</span>
            </div>

            <h1 class="font-black tracking-tighter uppercase leading-[0.85] mb-6 select-none"
                style="font-size: clamp(2.8rem, 11vw, 7rem)">
                <span
                    role="button"
                    tabindex="0"
                    class="block bg-gradient-to-b from-white to-[#555] bg-clip-text text-transparent cursor-pointer transition-all duration-200 hover:from-[#00f2fe] hover:to-[#007a87]"
                    onmouseenter={() => triggerHyperText(0)}
                    ontouchstart={() => triggerHyperText(0)}
                >{word0}</span>
                <span
                    role="button"
                    tabindex="0"
                    class="block bg-gradient-to-b from-white to-[#555] bg-clip-text text-transparent cursor-pointer transition-all duration-200 hover:from-[#00f2fe] hover:to-[#007a87]"
                    onmouseenter={() => triggerHyperText(1)}
                    ontouchstart={() => triggerHyperText(1)}
                >{word1}</span>
                <span
                    role="button"
                    tabindex="0"
                    class="block cursor-pointer transition-all duration-200"
                    style="font-size: clamp(1.8rem, 7vw, 4.2rem); color: #00f2fe; opacity: 0.8; font-style: italic;"
                    onmouseenter={() => triggerHyperText(2)}
                    ontouchstart={() => triggerHyperText(2)}
                >{word2}</span>
            </h1>

            <p class="text-sm md:text-lg text-[#8e8e93] max-w-[550px] leading-relaxed font-light">
                Transform fragmented marketing data into autonomous intelligence systems that leave competitors chasing your tail.
            </p>
        </section>

        <section class="pb-14">
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

        <section id="friction-form" class="pb-16 max-w-[650px] mx-auto">
            <div class="bg-[#09090b]/90 backdrop-blur-sm border border-[#1e1e24] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 hover:border-[#00f2fe]/20">
                <div class="absolute -top-20 -right-20 w-56 h-56 bg-[#00f2fe]/4 rounded-full blur-3xl pointer-events-none"></div>
                <div class="relative z-10">
                    <h2 class="text-xl md:text-2xl font-bold tracking-tight mb-2 text-white">Initialize Solution Architecture</h2>
                    <p class="text-[#8e8e93] mb-6 text-xs md:text-sm">Leave your preferred channel below to anchor the bridge between chaos and system intelligence.</p>

                    <form onsubmit={(e) => e.preventDefault()} class="space-y-4">
                        {#if selectedService}
                            <div class="text-[10px] font-mono text-zinc-600 uppercase tracking-widest animate-[blurFade_0.2s_ease-out]">
                                Requested context: <span class="text-[#00f2fe]">{selectedService}</span>
                            </div>
                        {/if}
                        
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div class="flex flex-col gap-2">
                                <label for="messenger" class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Preferred Channel</label>
                                <select
                                    id="messenger"
                                    bind:value={messengerType}
                                    class="w-full bg-black border border-[#1e1e24] rounded-xl p-3.5 text-white focus:outline-none focus:border-[#00f2fe] transition-all font-sans text-sm cursor-pointer appearance-none"
                                    style="background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"292.4\" height=\"292.4\" fill=\"%238e8e93\"><path d=\"M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z\"/></svg>'); background-repeat: no-repeat; background-position: right 14px top 50%; background-size: 10px auto;"
                                >
                                    <option value="Telegram">Telegram</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="WhatsApp">WhatsApp</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Line">Line</option>
                                    <option value="Phone/SMS">Phone / SMS</option>
                                </select>
                            </div>

                            <div class="flex flex-col gap-2 sm:col-span-2">
                                <label for="contact" class="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Contact Details</label>
                                <input
                                    id="contact"
                                    type="text"
                                    bind:value={contactInput}
                                    placeholder={inputPlaceholder}
                                    required
                                    class="w-full bg-black border border-[#1e1e24] rounded-xl p-3.5 text-white focus:outline-none focus:border-[#00f2fe] transition-all font-mono text-sm placeholder-zinc-700"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="w-full bg-white text-black p-3.5 rounded-xl font-bold text-sm transition-all hover:bg-[#00f2fe] hover:shadow-[0_0_30px_rgba(0,242,254,0.2)] active:scale-[0.98] mt-2"
                        >
                            Request Architecture Brief
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <footer class="border-t border-[#1e1e24] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-xs text-[#333] font-mono">© 2026 tsvetkov.site · All systems operational.</p>
            <div class="flex gap-6 text-sm text-[#8e8e93]">
                <a href="https://t.me/advertisment_th" target="_blank" class="hover:text-[#00f2fe] transition-colors">Telegram</a>
                <span role="link" tabindex="0" class="hover:text-[#00f2fe] transition-colors cursor-pointer">Instagram</span>
                <span role="link" tabindex="0" class="hover:text-[#00f2fe] transition-colors cursor-pointer">Threads</span>
                <span role="link" tabindex="0" class="hover:text-[#00f2fe] transition-colors cursor-pointer">TikTok</span>
            </div>
        </footer>
    </div>
</div>

<style>
    @keyframes blurFade {
        0%   { filter: blur(6px); opacity: 0; transform: translateY(8px); }
        100% { filter: blur(0);   opacity: 1; transform: translateY(0); }
    }
</style>
