function(instance, context) {

    function resizeElement() {
        const id = instance.data.targetID;
        const marginTop = instance.data.marginTop || 0;
        const marginLeft = instance.data.marginLeft || 0;
        const marginBottom = instance.data.marginBottom || 20;
        const marginRight = instance.data.marginRight || 20;
        const el = document.getElementById(id);

        if (el) {
            const applySize = () => {
                const availableHeight = window.innerHeight - el.getBoundingClientRect().top - marginBottom - marginTop;
                const availableWidth = window.innerWidth - marginRight - marginLeft;

                el.style.minHeight = availableHeight + "px";
                el.style.setProperty("width", availableWidth + "px", "important");
            };

            applySize();
            window.addEventListener("resize", applySize);
        } else {
            console.error("❌ Dynamic Resizer: Element ID not found →", id);
        }
    }

    setTimeout(resizeElement, 300);
}
