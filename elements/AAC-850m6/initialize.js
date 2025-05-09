function(instance, context) {

    function adjustHeight() {
        const targetID = instance.data.targetID;
        const marginBottom = instance.data.marginBottom || 20;
        const el = document.getElementById(targetID);

        if (el) {
            const applyHeight = () => {
                const availableHeight = window.innerHeight - el.getBoundingClientRect().top - marginBottom;
                el.style.minHeight = availableHeight + "px";
                console.log("✅ Dynamic Height Adjuster applied:", availableHeight);
            };

            applyHeight();
            window.addEventListener("resize", applyHeight);
        } else {
            console.error("❌ Element ID not found:", targetID);
        }
    }

    // run after short delay to ensure Bubble DOM is ready
    setTimeout(adjustHeight, 300);
}