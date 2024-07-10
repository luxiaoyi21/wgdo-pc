//懒加载
export default {
    inserted: (el, binding) => {
        const loadSection = () => {
            binding.value();
        };

        const createObserver = () => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadSection();
                        observer.unobserve(el);
                    }
                });
            });
            observer.observe(el);
        };

        if (window['IntersectionObserver']) {
            createObserver();
        } else {
            loadSection();
        }
    }
};
