/**
 * OurHomeIndia - Main Application Script & Interactive Features
 * Scope: Pan-India Verified Real Estate Platform
 * contact@ourhomeindia.com
 */

// Toast notification helper
function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  
  const icon = type === "success" 
    ? '<svg class="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'
    : '<svg class="w-5 h-5 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

// Generate Property Card HTML with scroll reveal integration
function createPropertyCardHTML(property, delay = "") {
  return `
    <article class="property-card flex flex-col h-full group scroll-reveal ${delay}" data-id="${property.id}" data-purpose="${property.purpose}" data-type="${property.propertyType}" data-price="${property.price}">
      <div class="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img 
          src="${property.images[0]}" 
          alt="${property.title}"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span class="badge-coral shadow-sm">${property.purpose === 'buy' ? 'For Sale' : 'For Rent'}</span>
          ${property.isVerified ? '<span class="badge-verified bg-white/95 backdrop-blur-sm shadow-sm"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> Verified</span>' : ''}
        </div>
        <div class="absolute bottom-3 right-3 bg-stone-900/85 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-medium">
          ${property.propertyType}
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-baseline justify-between gap-2 mb-2">
            <span class="font-display text-2xl font-semibold text-ink">${property.priceDisplay}</span>
            <span class="text-xs text-muted-custom font-mono">${property.pricePerSqFt || property.securityDeposit || ''}</span>
          </div>

          <h3 class="font-sans text-base font-semibold text-body-strong line-clamp-1 mb-1.5 group-hover:text-coral transition-colors">
            <a href="property-detail.html?id=${property.id}">${property.title}</a>
          </h3>

          <p class="text-xs text-muted-custom flex items-center gap-1.5 mb-4">
            <svg class="w-3.5 h-3.5 text-coral shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span class="truncate">${property.locality}, ${property.city}</span>
          </p>

          <!-- Key specifications -->
          <div class="grid grid-cols-3 gap-2 py-3 border-y border-hairline text-xs text-body-strong mb-4 bg-surface-soft/40 -mx-5 px-5">
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-muted-custom shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span class="truncate">${property.bedrooms > 0 ? property.bedrooms + ' BHK' : 'Commercial'}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-muted-custom shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
              <span class="truncate">${property.areaSqFt} sq.ft</span>
            </div>
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-muted-custom shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span class="truncate">${property.furnishing.split('-')[0]}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between gap-3 pt-1">
          <a href="property-detail.html?id=${property.id}" class="btn-secondary text-xs flex-1 text-center py-2.5">
            View Details
          </a>
          <button onclick="openEnquiryModal('${property.id}')" class="btn-primary text-xs py-2.5 px-3.5 shrink-0">
            Enquire
          </button>
        </div>
      </div>
    </article>
  `;
}

// Modal handling for Quick Enquiry
function openEnquiryModal(propertyId) {
  const property = typeof getPropertyById === 'function' ? getPropertyById(propertyId) : null;
  let modal = document.getElementById("enquiry-modal");
  
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "enquiry-modal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/65 backdrop-blur-sm";
    document.body.appendChild(modal);
  }

  const propTitle = property ? property.title : "General Property Enquiry";
  const propPrice = property ? property.priceDisplay : "";
  const propId = property ? property.id : "";

  modal.innerHTML = `
    <div class="bg-canvas border border-hairline rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn">
      <button onclick="closeEnquiryModal()" class="drawer-close-btn absolute top-4 right-4 text-muted-custom hover:text-ink hover:bg-surface-card" aria-label="Close modal">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="mb-5 pr-8">
        <span class="badge-pill mb-2">OurHomeIndia Advisory</span>
        <h3 class="font-display text-2xl text-ink">Schedule a Site Visit / Enquiry</h3>
        <p class="text-xs text-muted-custom mt-1">Property: <strong class="text-body-strong">${propTitle}</strong> ${propPrice ? `(${propPrice})` : ''}</p>
      </div>

      <form id="quick-enquiry-form" onsubmit="handleQuickEnquirySubmit(event, '${propId}')" class="space-y-3.5 text-sm">
        <div>
          <label class="block text-xs font-medium text-body-strong mb-1">Your Full Name *</label>
          <input type="text" name="name" required placeholder="e.g. Rajesh Sharma" class="form-input text-sm">
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-body-strong mb-1">Phone Number *</label>
            <input type="tel" name="phone" required placeholder="10-digit mobile number" class="form-input text-sm" pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number">
          </div>
          <div>
            <label class="block text-xs font-medium text-body-strong mb-1">Email Address</label>
            <input type="email" name="email" placeholder="rajesh@example.com" class="form-input text-sm">
          </div>
        </div>
        <div>
          <label class="block text-xs font-medium text-body-strong mb-1">Preferred Site Visit Date / Notes</label>
          <textarea name="message" rows="2" placeholder="I would like to visit this weekend or request more details." class="form-input text-sm"></textarea>
        </div>

        <div class="bg-surface-soft p-3 rounded-lg text-xs text-muted-custom flex items-center gap-2">
          <svg class="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          <span>Direct enquiry dispatched to <strong>contact@ourhomeindia.com</strong>. Zero spam.</span>
        </div>

        <div class="flex gap-3 pt-2">
          <button type="button" onclick="closeEnquiryModal()" class="btn-secondary flex-1 py-2.5 text-xs">Cancel</button>
          <button type="submit" class="btn-primary flex-1 py-2.5 text-xs">Submit Enquiry</button>
        </div>
      </form>
    </div>
  `;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeEnquiryModal() {
  const modal = document.getElementById("enquiry-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function handleQuickEnquirySubmit(e, propertyId) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const phone = form.phone.value;

  closeEnquiryModal();
  showToast(`Thank you, ${name}! Your enquiry has been sent to contact@ourhomeindia.com. Our property advisor will call ${phone} shortly.`);
  form.reset();
}

/**
 * Mobile Drawer Navigation Controller
 */
function initMobileNavigation() {
  const hamburgerBtns = document.querySelectorAll("#mobile-menu-btn, .hamburger-btn");
  const overlay = document.getElementById("mobile-overlay");
  const panel = document.getElementById("mobile-panel");
  const closeBtns = document.querySelectorAll("#mobile-drawer-close, .mobile-close-btn");

  function openDrawer() {
    if (overlay) overlay.classList.add("open");
    if (panel) panel.classList.add("open");
    hamburgerBtns.forEach(btn => btn.classList.add("is-active"));
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (overlay) overlay.classList.remove("open");
    if (panel) panel.classList.remove("open");
    hamburgerBtns.forEach(btn => btn.classList.remove("is-active"));
    document.body.style.overflow = "";
  }

  hamburgerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = panel && panel.classList.contains("open");
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", closeDrawer);
  });

  if (overlay) {
    overlay.addEventListener("click", closeDrawer);
  }

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
      closeEnquiryModal();
      closeNoticeModal();
    }
  });

  // Close when tapping any link inside the panel
  if (panel) {
    panel.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeDrawer);
    });
  }
}

/**
 * Platform Development & Sample Data Notice Banner & Modal
 */
function openNoticeModal() {
  let modal = document.getElementById("dev-notice-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "dev-notice-modal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-canvas border border-hairline rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn">
      <button onclick="closeNoticeModal()" class="drawer-close-btn absolute top-4 right-4 text-muted-custom hover:text-ink hover:bg-surface-card" aria-label="Close notification">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="flex items-center gap-2.5 mb-3">
        <div class="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        </div>
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wide uppercase bg-amber-100 text-amber-900 border border-amber-200">
          Under Development • Demo Preview
        </span>
      </div>

      <h3 class="font-display text-2xl sm:text-3xl text-ink font-semibold tracking-tight mb-2">
        Welcome to OurHome<span class="text-coral">India</span>
      </h3>

      <p class="text-sm text-body-strong leading-relaxed mb-4">
        This platform is currently <strong>under active development and coming soon</strong>.
      </p>

      <div class="bg-surface-soft border border-hairline rounded-xl p-4 mb-5 text-xs text-body leading-relaxed space-y-2">
        <div class="flex items-start gap-2 text-ink font-medium">
          <svg class="w-4 h-4 text-coral shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Sample / Mock Data Notice:</span>
        </div>
        <p class="text-muted-custom pl-6">
          All property listings, pricing figures, photos, specifications, floor plans, and seller profiles displayed on this website are <strong>strictly example & sample data</strong> for design and demonstration purposes. They do <strong>not</strong> represent real or active market transactions.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 pt-1">
        <button type="button" onclick="closeNoticeModal()" class="btn-primary flex-1 py-3 text-xs justify-center font-medium shadow-sm">
          I Understand • Explore Demo
        </button>
        <a href="contact.html" onclick="closeNoticeModal()" class="btn-secondary py-3 text-xs justify-center text-center">
          Contact Team
        </a>
      </div>

      <div class="text-center pt-3 text-[11px] text-muted-custom font-mono">
        Official launch coming soon • <a href="mailto:contact@ourhomeindia.com" class="hover:text-coral underline underline-offset-2">contact@ourhomeindia.com</a>
      </div>
    </div>
  `;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeNoticeModal() {
  const modal = document.getElementById("dev-notice-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
  try {
    sessionStorage.setItem("ohi_preview_notice_seen", "true");
  } catch (e) {
    // Session storage not available
  }
}

function initDevelopmentNotice() {
  // 1. Inject persistent top announcement banner if not already present
  if (!document.getElementById("dev-notice-banner")) {
    const banner = document.createElement("div");
    banner.id = "dev-notice-banner";
    banner.className = "dev-notice-banner bg-[#181715] text-[#e8e0d2] text-xs py-2 px-3 sm:px-4 border-b border-[#2d2a26] relative z-40";
    banner.innerHTML = `
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div class="flex items-center gap-2 truncate">
          <span class="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold shrink-0">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            Demo Preview
          </span>
          <span class="truncate text-[11px] sm:text-xs text-stone-300">
            <strong>Website under development & coming soon.</strong> All listings, prices & details shown are sample/example data.
          </span>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button onclick="openNoticeModal()" class="text-coral hover:underline text-[11px] sm:text-xs font-medium cursor-pointer">
            Notice Details
          </button>
        </div>
      </div>
    `;
    document.body.insertBefore(banner, document.body.firstChild);
  }

  // 2. Open pop-up disclaimer modal on first visit in the session
  try {
    const hasSeenNotice = sessionStorage.getItem("ohi_preview_notice_seen");
    if (!hasSeenNotice) {
      // Small timeout for smooth entry animation
      setTimeout(() => {
        openNoticeModal();
      }, 500);
    }
  } catch (e) {
    setTimeout(() => {
      openNoticeModal();
    }, 500);
  }
}

/**
 * Scroll Reveal Animation Observer
 */
function initScrollReveal() {
  const elements = document.querySelectorAll(".scroll-reveal");
  if (!elements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add("is-visible"));
  }
}

// Global DOM Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initDevelopmentNotice();
  initMobileNavigation();
  initScrollReveal();

  // Newsletter handler
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast(`Subscribed! Verified property updates will be sent to ${emailInput.value}.`);
        emailInput.value = "";
      }
    });
  }

  // General contact form handler
  const generalContactForm = document.getElementById("general-contact-form");
  if (generalContactForm) {
    generalContactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = generalContactForm.querySelector('[name="name"]')?.value || "Client";
      showToast(`Thank you, ${name}! Your enquiry has been sent to contact@ourhomeindia.com. Our property advisor will connect with you within 2 hours.`);
      generalContactForm.reset();
    });
  }
});
