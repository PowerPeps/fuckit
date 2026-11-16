chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "fuckit",
    title: "fuck it",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== "fuckit" || !tab?.id) return;
  chrome.tabs
    .sendMessage(tab.id, "fuckit", { frameId: info.frameId ?? 0 })
    .catch(() => {});
});
