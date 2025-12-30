const KEY = "pastes";

export function getPastes() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function savePaste(paste) {
  const pastes = getPastes();
  pastes.unshift(paste);
  localStorage.setItem(KEY, JSON.stringify(pastes));
}

export function removePaste(id) {
  const pastes = getPastes().filter(p => p.id !== id);
  localStorage.setItem(KEY, JSON.stringify(pastes));
}

export function cleanupExpiredPastes() {
  const now = Date.now();
  const pastes = getPastes().filter(p => {
    if (p.expiresAt && now > p.expiresAt) return false;
    if (p.maxViews !== null && p.maxViews <= 0) return false;
    return true;
  });
  localStorage.setItem(KEY, JSON.stringify(pastes));
  return pastes;
}
