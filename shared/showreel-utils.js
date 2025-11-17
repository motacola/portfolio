const DEFAULT_FILTER = "all";

const FILTER_LABELS = {
  [DEFAULT_FILTER]: "All Projects",
  ad: "Ad Spots",
  trailer: "Trailers",
  bts: "Behind the Scenes",
};

const normalizeFilter = (filterValue) => {
  const key = filterValue || DEFAULT_FILTER;
  return key === DEFAULT_FILTER || FILTER_LABELS[key] ? key : DEFAULT_FILTER;
};

const getFilterStatusText = (filterValue = DEFAULT_FILTER) => {
  const normalized = normalizeFilter(filterValue);
  if (normalized === DEFAULT_FILTER) {
    return "Showing All Projects";
  }
  const label = FILTER_LABELS[normalized] || "Selected";
  return `Showing ${label}`;
};

const resolveFilterState = (filterValue = DEFAULT_FILTER, categories) => {
  const normalized = normalizeFilter(filterValue);
  if (!Array.isArray(categories)) {
    throw new TypeError("resolveFilterState requires an array of categories.");
  }

  let visibleIndex = 0;
  return categories.map((category = "") => {
    const show = normalized === DEFAULT_FILTER || category === normalized;
    const order = show ? visibleIndex++ : null;
    return { show, order };
  });
};

export {
  DEFAULT_FILTER,
  FILTER_LABELS,
  getFilterStatusText,
  resolveFilterState,
};
