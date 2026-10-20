/*
 * TizenBrew injects this into the Stremio page.
 *
 * The page is served from the same host as /api/waveform, so synchronisation
 * usually needs no override at all. Explicitly setting the server also makes
 * the module work when /app/ is behind a reverse proxy or a different host.
 */
try {
    window.__STREMIO_SYNC_SERVER__ = 'http://109.123.248.61:7011';
} catch (error) {
    /* ignore */
}

try {
    if (!localStorage.getItem('stremio.sync.server')) {
        localStorage.setItem('stremio.sync.server', 'http://109.123.248.61:7011');
    }
} catch (error) {
    /* storage disabled */
}
