@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Outfit:wght@700;800&display=swap');

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Outfit", sans-serif;
}

@layer base {
  body {
    @apply bg-black text-white antialiased;
  }
}

@layer utilities {
  .modal-overlay {
    @apply fixed inset-0 z-50 flex items-center justify-center bg-black/90 opacity-0 pointer-events-none transition-opacity duration-300;
  }
  
  .modal-overlay:target {
    @apply opacity-100 pointer-events-auto;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
