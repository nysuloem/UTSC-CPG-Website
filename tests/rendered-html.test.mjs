import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("homepage renders the research-group identity and primary actions", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /UTSC Computational Physiology Group/);
  assert.match(html, /Model the whole system/);
  assert.match(html, /Explore our research/);
  assert.match(html, /Request the UTSC release/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("key top-level routes render substantive content", async () => {
  const expectations = [
    ["/about", /Build the model\. Build the modeller\./],
    ["/research", /Questions that cross system boundaries\./],
    ["/people", /A research group built around student questions\./],
    ["/hummod", /A whole body, expressed as relationships\./],
    ["/outputs", /Research, presented in public\./],
    ["/join", /Your first model can begin with one good question\./],
  ];
  for (const [path, pattern] of expectations) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), pattern, path);
  }
});

test("representative output detail metadata matches its record", async () => {
  const response = await render("/outputs/best-thesis-presentation-2026");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Best Undergraduate Research Presenter/);
  assert.match(html, /Aaesha Ahmed/);
  assert.match(html, /UTSC BIOD98 Presentation Day/);
  assert.match(html, /<title>Best Undergraduate Research Presenter \| UTSC Computational Physiology Group<\/title>/);
});
