const webApp = window.WebApp;
if (webApp) {
  const currentHour = new Date().getHours();
  if (currentHour >= 21 || currentHour <= 6 || Math.random() * 100 < 20) {
    webApp.showDialog(
      JSON.stringify({
        title: "Baixe a Nova Versão do APK!",
        message:
          "A nova atualização do APK já está disponível! Com novos recursos e melhorias de desempenho, essa versão vai tornar sua experiência ainda melhor.<br>Atualize agora e aproveite as novidades!",
        actionTitle: "Baixar APK",
        actionUrl: "https://movser-app.pages.dev/Smart_Fs-Play.apk",
        additionalButtons: [],
        cancelable: false,
        directInstall: false,
        global: false,
        manualInstall: false,
        update: false,
      })
    );
  }
}
window.location.replace("https://movser-app.pages.dev/upgrade");
