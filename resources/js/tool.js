Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: "translation-editor",
      path: "/translation-editor",
      component: require("./components/Tool"),
    },
  ]);
});
