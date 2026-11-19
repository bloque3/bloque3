export interface FormHandlerConfig {
  ajaxEndpoint: string;
  whatsappUrl: string;
  email: string;
}

export function attachBloque3Forms(config: FormHandlerConfig): void {
  const forms = document.querySelectorAll<HTMLFormElement>("form[data-bloque3-form]");

  forms.forEach((form) => {
    const statusBox = form.querySelector<HTMLElement>("[data-form-status]");
    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const originalLabel = submitBtn?.textContent?.trim() || "Enviar";

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const honey = form.querySelector<HTMLInputElement>('input[name="_honey"]');
      if (honey && honey.value.trim() !== "") {
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando...";
      }

      if (statusBox) {
        statusBox.className =
          "p-4 border border-rule bg-paper-alt text-ink font-mono text-xs leading-relaxed";
        statusBox.textContent = "Procesando envío...";
        statusBox.classList.remove("hidden");
      }

      try {
        const formData = new FormData(form);
        const response = await fetch(config.ajaxEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });

        const payload = await response.json().catch(() => ({}));

        if (response.ok && (payload.success === "true" || payload.success === true || response.status === 200)) {
          form.reset();
          if (statusBox) {
            statusBox.className =
              "p-4 border border-pine bg-signal/25 text-ink text-sm leading-relaxed";
            statusBox.innerHTML = `<strong class="font-display block mb-1 text-pine">Solicitud enviada correctamente.</strong>Gracias por escribirnos. Te contactaremos pronto al correo o canal indicado.`;
          }
        } else {
          throw new Error(payload?.message || "No se pudo confirmar el envío.");
        }
      } catch {
        if (statusBox) {
          statusBox.className =
            "p-4 border border-red-700 bg-red-50 text-ink text-sm leading-relaxed";
          statusBox.innerHTML = `<strong class="font-display block mb-1 text-red-800">No se pudo completar el envío automático.</strong>Escríbenos directo por <a href="${config.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="underline font-medium">WhatsApp</a> o a <a href="mailto:${config.email}" class="underline font-medium">${config.email}</a> y lo revisamos de inmediato.`;
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
      }
    });
  });
}
