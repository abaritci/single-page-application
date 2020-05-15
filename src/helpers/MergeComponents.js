/**
 *
 * @param components
 * @returns {string}
 */
export function MergeComponents(components) {
    return components.toString().replace(/,/g, '');
}