import {
  __async,
  __asyncGenerator,
  __await,
  __spreadProps,
  __spreadValues,
  __yieldStar
} from "./chunk-XZX6BSKZ.js";

// node_modules/@directus/system-data/dist/index.js
var t = { table: "directus_collections", defaults: { collection: null, hidden: false, singleton: false, icon: null, note: null, translations: null, display_template: null, accountability: "all" }, data: [{ collection: "directus_activity", note: "$t:directus_collection.directus_activity", accountability: null }, { collection: "directus_collections", icon: "database", note: "$t:directus_collection.directus_collections" }, { collection: "directus_fields", icon: "input", note: "$t:directus_collection.directus_fields" }, { collection: "directus_files", icon: "folder", note: "$t:directus_collection.directus_files", display_template: "{{ $thumbnail }} {{ title }}" }, { collection: "directus_folders", note: "$t:directus_collection.directus_folders", display_template: "{{ name }}" }, { collection: "directus_migrations", note: "$t:directus_collection.directus_migrations" }, { collection: "directus_permissions", icon: "admin_panel_settings", note: "$t:directus_collection.directus_permissions" }, { collection: "directus_presets", icon: "bookmark", note: "$t:directus_collection.directus_presets", accountability: null }, { collection: "directus_relations", icon: "merge_type", note: "$t:directus_collection.directus_relations" }, { collection: "directus_revisions", note: "$t:directus_collection.directus_revisions", accountability: null }, { collection: "directus_roles", icon: "supervised_user_circle", note: "$t:directus_collection.directus_roles" }, { collection: "directus_sessions", note: "$t:directus_collection.directus_sessions" }, { collection: "directus_settings", singleton: true, note: "$t:directus_collection.directus_settings" }, { collection: "directus_users", archive_field: "status", archive_value: "archived", unarchive_value: "draft", icon: "people_alt", note: "$t:directus_collection.directus_users", display_template: "{{ first_name }} {{ last_name }}" }, { collection: "directus_webhooks", note: "$t:directus_collection.directus_webhooks" }, { collection: "directus_dashboards", note: "$t:directus_collection.directus_dashboards" }, { collection: "directus_panels", note: "$t:directus_collection.directus_panels" }, { collection: "directus_notifications", note: "$t:directus_collection.directus_notifications" }, { collection: "directus_shares", icon: "share", note: "$t:directus_collection.directus_shares" }, { collection: "directus_flows", note: "$t:directus_collection.directus_flows" }, { collection: "directus_operations", note: "$t:directus_collection.directus_operations" }, { collection: "directus_translations", note: "$t:directus_collection.directus_translations" }, { collection: "directus_versions", note: "$t:directus_collection.directus_versions" }, { collection: "directus_extensions", note: "$t:directus_collection.directus_extensions" }] };
var me = t.data.map((i) => __spreadProps(__spreadValues(__spreadValues({}, t.defaults), i), { system: true }));
var D = t.data.map((i) => i.collection);
function ge(i) {
  return D.includes(i);
}
var l = { table: "directus_relations", defaults: { many_collection: "directus_users", many_field: null, one_collection: null, one_field: null, one_allowed_collections: null, one_collection_field: null, one_deselect_action: "nullify", junction_field: null, sort_field: null }, data: [{ many_collection: "directus_collections", many_field: "group", one_collection: "directus_collections" }, { many_collection: "directus_users", many_field: "role", one_collection: "directus_roles", one_field: "users" }, { many_collection: "directus_users", many_field: "avatar", one_collection: "directus_files" }, { many_collection: "directus_revisions", many_field: "activity", one_collection: "directus_activity", one_field: "revisions" }, { many_collection: "directus_revisions", many_field: "parent", one_collection: "directus_revisions" }, { many_collection: "directus_revisions", many_field: "version", one_collection: "directus_versions" }, { many_collection: "directus_presets", many_field: "user", one_collection: "directus_users" }, { many_collection: "directus_presets", many_field: "role", one_collection: "directus_roles" }, { many_collection: "directus_folders", many_field: "parent", one_collection: "directus_folders" }, { many_collection: "directus_files", many_field: "folder", one_collection: "directus_folders" }, { many_collection: "directus_files", many_field: "uploaded_by", one_collection: "directus_users" }, { many_collection: "directus_files", many_field: "modified_by", one_collection: "directus_users" }, { many_collection: "directus_fields", many_field: "collection", one_collection: "directus_collections", one_field: "fields" }, { many_collection: "directus_fields", many_field: "group", one_collection: "directus_fields" }, { many_collection: "directus_activity", many_field: "user", one_collection: "directus_users" }, { many_collection: "directus_settings", many_field: "project_logo", one_collection: "directus_files" }, { many_collection: "directus_settings", many_field: "public_foreground", one_collection: "directus_files" }, { many_collection: "directus_settings", many_field: "public_background", one_collection: "directus_files" }, { many_collection: "directus_settings", many_field: "public_favicon", one_collection: "directus_files" }, { many_collection: "directus_settings", many_field: "storage_default_folder", one_collection: "directus_folders" }, { many_collection: "directus_panels", many_field: "dashboard", one_collection: "directus_dashboards", one_field: "panels" }, { many_collection: "directus_panels", many_field: "user_created", one_collection: "directus_users" }, { many_collection: "directus_flows", many_field: "operation", one_collection: "directus_operations" }, { many_collection: "directus_flows", many_field: "user_created", one_collection: "directus_users" }, { many_collection: "directus_operations", many_field: "flow", one_collection: "directus_flows", one_field: "operations", one_deselect_action: "delete" }, { many_collection: "directus_operations", many_field: "resolve", one_collection: "directus_operations" }, { many_collection: "directus_operations", many_field: "reject", one_collection: "directus_operations" }, { many_collection: "directus_operations", many_field: "user_created", one_collection: "directus_users" }, { many_collection: "directus_permissions", many_field: "role", one_collection: "directus_roles" }, { many_collection: "directus_sessions", many_field: "user", one_collection: "directus_users" }, { many_collection: "directus_sessions", many_field: "share", one_collection: "directus_shares" }, { many_collection: "directus_dashboards", many_field: "user_created", one_collection: "directus_users" }, { many_collection: "directus_notifications", many_field: "recipient", one_collection: "directus_users" }, { many_collection: "directus_notifications", many_field: "sender", one_collection: "directus_users" }, { many_collection: "directus_shares", many_field: "role", one_collection: "directus_roles" }, { many_collection: "directus_shares", many_field: "collection", one_collection: "directus_collections" }, { many_collection: "directus_shares", many_field: "user_created", one_collection: "directus_users" }, { many_collection: "directus_versions", many_field: "collection", one_collection: "directus_collections" }, { many_collection: "directus_versions", many_field: "user_created", one_collection: "directus_users" }, { many_collection: "directus_versions", many_field: "user_updated", one_collection: "directus_users" }] };
var be = l.data.map((i) => __spreadProps(__spreadValues(__spreadValues({}, l.defaults), i), { system: true }));
var o = { collection: null, field: null, special: null, interface: null, options: null, display: null, display_options: null, readonly: false, hidden: false, sort: null, width: "full", group: null, translations: null, note: null, conditions: null, required: false };
var a = { table: "directus_activity", fields: [{ field: "id", width: "half" }, { field: "item", width: "half" }, { field: "action", display: "labels", display_options: { choices: [{ text: "$t:field_options.directus_activity.create", value: "create", foreground: "var(--theme--primary)", background: "var(--theme--primary-subdued)" }, { text: "$t:field_options.directus_activity.update", value: "update", foreground: "var(--blue)", background: "var(--blue-25)" }, { text: "$t:field_options.directus_activity.delete", value: "delete", foreground: "var(--theme--danger)", background: "var(--danger-25)" }, { text: "$t:field_options.directus_activity.login", value: "login", foreground: "var(--purple)", background: "var(--purple-25)" }] }, width: "half" }, { field: "collection", display: "collection", display_options: { icon: true }, width: "half" }, { field: "timestamp", display: "datetime", special: ["date-created", "cast-timestamp"], options: { relative: true }, width: "half" }, { field: "user", display: "user", width: "half" }, { field: "comment", display: "formatted-value", display_options: { color: "var(--theme--foreground-subdued)" }, width: "half" }, { field: "user_agent", display: "formatted-value", display_options: { font: "monospace" }, width: "half" }, { field: "origin", display: "formatted-value", display_options: { font: "monospace" }, width: "half" }, { field: "ip", display: "formatted-value", display_options: { font: "monospace" }, width: "half" }, { field: "revisions", interface: "list-o2m", special: ["o2m"], options: { fields: ["collection", "item"] }, width: "half" }] };
var s = { table: "directus_collections", fields: [{ field: "collection_divider", special: ["alias", "no-data"], interface: "presentation-divider", options: { icon: "box", title: "$t:field_options.directus_collections.collection_setup" }, width: "full" }, { field: "collection", interface: "input", options: { font: "monospace" }, readonly: true, width: "half" }, { field: "note", interface: "input", options: { placeholder: "$t:field_options.directus_collections.note_placeholder" }, width: "half" }, { field: "icon", interface: "select-icon", options: null, width: "half" }, { field: "color", interface: "select-color", options: { placeholder: "$t:interfaces.select-color.placeholder" }, width: "half" }, { field: "display_template", interface: "system-display-template", options: { collectionField: "collection" }, width: "full" }, { field: "hidden", special: ["cast-boolean"], interface: "boolean", options: { label: "$t:field_options.directus_collections.hidden_label" }, width: "half" }, { field: "singleton", special: ["cast-boolean"], interface: "boolean", options: { label: "$t:singleton_label" }, width: "half" }, { field: "translations", special: ["cast-json"], interface: "list", options: { template: "{{ translation }} ({{ language }})", fields: [{ field: "language", name: "$t:language", type: "string", schema: { default_value: "en-US" }, meta: { interface: "system-language", width: "half", required: true } }, { field: "translation", name: "$t:field_options.directus_collections.collection_name", type: "string", meta: { interface: "input", width: "half", required: true, options: { placeholder: "$t:field_options.directus_collections.translation_placeholder" } } }, { field: "singular", name: "$t:field_options.directus_collections.singular_unit", type: "string", meta: { interface: "input", width: "half", options: { placeholder: "$t:field_options.directus_collections.translation_placeholder" } } }, { field: "plural", name: "$t:field_options.directus_collections.plural_unit", type: "string", meta: { interface: "input", width: "half", options: { placeholder: "$t:field_options.directus_collections.translation_placeholder" } } }] }, width: "full" }, { field: "preview_divider", special: ["alias", "no-data"], interface: "presentation-divider", options: { icon: "preview", title: "$t:field_options.directus_collections.preview_divider" }, width: "full" }, { field: "preview_url", interface: "system-display-template", options: { collectionField: "collection", injectVersionField: true }, width: "full" }, { field: "content_versioning_divider", special: ["alias", "no-data"], interface: "presentation-divider", options: { icon: "published_with_changes", title: "$t:field_options.directus_collections.content_versioning_divider" }, width: "full" }, { field: "versioning", interface: "boolean", special: ["cast-boolean"], options: { label: "$t:field_options.directus_collections.enable_versioning" }, width: "half" }, { field: "archive_divider", special: ["alias", "no-data"], interface: "presentation-divider", options: { icon: "archive", title: "$t:field_options.directus_collections.archive_divider" }, width: "full" }, { field: "archive_field", interface: "system-field", options: { collectionField: "collection", allowNone: true, placeholder: "$t:field_options.directus_collections.archive_field_placeholder" }, width: "half" }, { field: "archive_app_filter", interface: "boolean", special: ["cast-boolean"], options: { label: "$t:field_options.directus_collections.archive_app_filter" }, width: "half" }, { field: "archive_value", interface: "input", options: { font: "monospace", iconRight: "archive", placeholder: "$t:field_options.directus_collections.archive_value" }, width: "half" }, { field: "unarchive_value", interface: "input", options: { font: "monospace", iconRight: "unarchive", placeholder: "$t:field_options.directus_collections.unarchive_value" }, width: "half" }, { field: "sort_divider", special: ["alias", "no-data"], interface: "presentation-divider", options: { icon: "sort", title: "$t:field_options.directus_collections.sort_divider" }, width: "full" }, { field: "sort_field", interface: "system-field", options: { collectionField: "collection", placeholder: "$t:field_options.directus_collections.sort_field", typeAllowList: ["float", "decimal", "integer"], allowNone: true, allowPrimaryKey: false, allowForeignKeys: false }, width: "half" }, { field: "accountability_divider", special: ["alias", "no-data"], interface: "presentation-divider", options: { icon: "admin_panel_settings", title: "$t:field_options.directus_collections.accountability_divider" }, width: "full" }, { field: "accountability", interface: "select-dropdown", options: { choices: [{ text: "$t:field_options.directus_collections.track_activity_revisions", value: "all" }, { text: "$t:field_options.directus_collections.only_track_activity", value: "activity" }, { text: "$t:field_options.directus_collections.do_not_track_anything", value: null }] }, width: "half" }, { field: "duplication_divider", special: ["alias", "no-data"], interface: "presentation-divider", options: { icon: "content_copy", title: "$t:field_options.directus_collections.duplication_divider" } }, { field: "item_duplication_fields", special: ["cast-json"], interface: "system-field-tree", options: { collectionField: "collection" } }, { field: "sort", hidden: true }, { field: "group", hidden: true }, { field: "collapse", hidden: true }] };
var n = { table: "directus_fields", fields: [{ collection: "directus_fields", field: "id", width: "half" }, { collection: "directus_fields", field: "collection", width: "half" }, { collection: "directus_fields", field: "field", width: "half" }, { collection: "directus_fields", field: "special", hidden: true, special: ["cast-csv"], width: "half" }, { collection: "directus_fields", field: "interface", width: "half" }, { collection: "directus_fields", field: "options", hidden: true, special: ["cast-json"], width: "half" }, { collection: "directus_fields", field: "display", width: "half" }, { collection: "directus_fields", field: "display_options", hidden: true, special: ["cast-json"], width: "half" }, { collection: "directus_fields", field: "readonly", hidden: true, special: ["cast-boolean"], width: "half" }, { collection: "directus_fields", field: "hidden", hidden: true, special: ["cast-boolean"], width: "half" }, { collection: "directus_fields", field: "required", hidden: true, special: ["cast-boolean"], width: "half" }, { collection: "directus_fields", field: "sort", width: "half" }, { collection: "directus_fields", field: "width", width: "half" }, { collection: "directus_fields", field: "group", width: "half" }, { collection: "directus_fields", field: "translations", hidden: true, special: ["cast-json"], width: "half" }, { collection: "directus_fields", field: "note", width: "half" }, { collection: "directus_fields", field: "conditions", hidden: true, special: ["cast-json"] }, { collection: "directus_fields", field: "validation", hidden: true, special: ["cast-json"] }, { collection: "directus_fields", field: "validation_message", hidden: true }] };
var d = { table: "directus_files", fields: [{ field: "id", hidden: true, interface: "input", special: ["uuid"] }, { field: "title", interface: "input", options: { iconRight: "title", placeholder: "$t:field_options.directus_files.title" }, width: "full" }, { field: "description", interface: "input-multiline", width: "full", options: { placeholder: "$t:field_options.directus_files.description" } }, { field: "tags", interface: "tags", options: { iconRight: "local_offer" }, special: ["cast-json"], width: "full", display: "labels", display_options: { choices: null, format: false } }, { field: "location", interface: "input", options: { iconRight: "place", placeholder: "$t:field_options.directus_files.location" }, width: "half" }, { field: "storage", interface: "input", options: { iconRight: "storage" }, width: "half", readonly: true }, { field: "focal_point_divider", interface: "presentation-divider", options: { icon: "image_search", title: "$t:field_options.directus_files.focal_point_divider" }, special: ["alias", "no-data"], width: "full" }, { field: "focal_point_x", width: "half" }, { field: "focal_point_y", width: "half" }, { field: "storage_divider", interface: "presentation-divider", options: { icon: "insert_drive_file", title: "$t:field_options.directus_files.storage_divider" }, special: ["alias", "no-data"], width: "full" }, { field: "filename_disk", interface: "input", options: { iconRight: "publish", placeholder: "$t:field_options.directus_files.filename_disk" }, readonly: true, width: "half" }, { field: "filename_download", interface: "input", options: { iconRight: "get_app", placeholder: "$t:field_options.directus_files.filename_download" }, width: "half" }, { field: "metadata", hidden: true, special: ["cast-json"] }, { field: "type", display: "mime-type", readonly: true }, { field: "filesize", display: "filesize", readonly: true }, { field: "modified_by", interface: "select-dropdown-m2o", special: ["user-updated"], width: "half", display: "user", readonly: true, options: { template: "{{avatar.$thumbnail}} {{first_name}} {{last_name}}" } }, { field: "modified_on", interface: "datetime", special: ["date-updated"], width: "half", display: "datetime", readonly: true }, { field: "embed", width: "half", hidden: true }, { field: "uploaded_by", display: "user", width: "half", hidden: true, special: ["user-created"] }, { field: "uploaded_on", display: "datetime", width: "half", hidden: true }, { field: "folder", width: "half", readonly: true, special: ["m2o"], display: "related-values", display_options: { template: "{{ name }}" } }, { field: "width", width: "half", readonly: true }, { field: "height", width: "half", readonly: true }, { field: "charset", width: "half", readonly: true }, { field: "duration", width: "half", readonly: true }] };
var r = { table: "directus_folders", fields: [{ field: "id", interface: "input", special: ["uuid"], width: "half" }, { field: "parent", width: "half" }, { field: "name", width: "full" }] };
var c = { table: "directus_migrations", fields: [{ collection: "directus_migrations", field: "version" }, { collection: "directus_migrations", field: "name" }, { collection: "directus_migrations", field: "timestamp" }] };
var f = { table: "directus_permissions", fields: [{ field: "permissions", hidden: true, special: ["cast-json"], width: "half" }, { field: "presets", hidden: true, special: ["cast-json"], width: "half" }, { field: "role", width: "half" }, { field: "collection", width: "half" }, { field: "id", width: "half" }, { field: "fields", width: "half", special: ["cast-csv"] }, { field: "action", width: "half" }, { field: "validation", width: "half", special: ["cast-json"] }] };
var u = { table: "directus_presets", fields: [{ field: "filter", hidden: true, special: ["cast-json"] }, { field: "layout_query", hidden: true, special: ["cast-json"] }, { field: "layout_options", hidden: true, special: ["cast-json"] }, { field: "role", width: "half", special: ["m2o"], display: "related-values", display_options: { template: "{{ name }}" } }, { field: "user", width: "half", special: ["m2o"], display: "related-values", display_options: { template: "{{ email }}" } }, { field: "id", width: "half" }, { field: "bookmark", width: "half" }, { field: "icon", width: "half" }, { field: "color", width: "half" }, { field: "search", width: "half" }, { field: "collection", width: "half" }, { field: "layout", width: "half" }, { field: "refresh_interval" }] };
var p = { table: "directus_relations", fields: [{ field: "id", width: "half" }, { field: "many_collection", width: "half" }, { field: "many_field", width: "half" }, { field: "one_collection", width: "half" }, { field: "one_field", width: "half" }, { field: "one_collection_field", width: "half" }, { field: "one_allowed_collections", special: ["cast-csv"], width: "half" }, { field: "junction_field", width: "half" }, { field: "sort_field", width: "half" }, { field: "one_deselect_action", width: "half" }] };
var _ = { table: "directus_revisions", fields: [{ field: "id", width: "half" }, { field: "activity", width: "half" }, { field: "collection", width: "half" }, { field: "item", width: "half" }, { field: "data", hidden: true, special: ["cast-json"] }, { field: "delta", hidden: true, special: ["cast-json"] }, { field: "parent", width: "half" }, { field: "version", width: "half" }] };
var h = { table: "directus_roles", fields: [{ field: "id", hidden: true, interface: "input", special: ["uuid"] }, { field: "name", interface: "input", options: { placeholder: "$t:field_options.directus_roles.name" }, width: "half" }, { field: "icon", interface: "select-icon", display: "icon", width: "half" }, { field: "description", interface: "input", options: { placeholder: "$t:field_options.directus_roles.description" }, width: "full" }, { field: "app_access", interface: "boolean", special: ["cast-boolean"], width: "half" }, { field: "admin_access", interface: "boolean", special: ["cast-boolean"], width: "half" }, { field: "ip_access", interface: "tags", options: { placeholder: "$t:field_options.directus_roles.ip_access" }, special: ["cast-csv"], width: "full" }, { field: "enforce_tfa", interface: "boolean", special: ["cast-boolean"], width: "half" }, { field: "users", interface: "list-o2m", special: ["o2m"], options: { fields: ["first_name", "last_name"] }, width: "full" }] };
var m = { table: "directus_sessions", fields: [{ field: "token", width: "half" }, { field: "user", width: "half" }, { field: "expires", width: "half" }, { field: "ip", width: "half" }, { field: "user_agent", width: "half" }, { field: "origin", width: "half" }, { field: "share" }] };
var g = { table: "directus_settings", fields: [{ field: "id", hidden: true }, { field: "project_name", interface: "input", options: { iconRight: "title", placeholder: "$t:field_options.directus_settings.project_name_placeholder" }, width: "half" }, { field: "project_descriptor", interface: "input", options: { iconRight: "title", placeholder: "$t:field_options.directus_settings.project_name_placeholder" }, width: "half" }, { field: "project_url", interface: "input", options: { iconRight: "link", placeholder: "https://example.com" }, width: "half" }, { field: "default_language", interface: "system-language", options: { iconRight: "language", placeholder: "en-US" }, width: "half" }, { field: "theming_group", interface: "group-raw", special: ["alias", "no-data", "group"] }, { field: "branding_divider", interface: "presentation-divider", options: { icon: "palette", title: "$t:fields.directus_settings.branding" }, special: ["alias", "no-data"], width: "full", group: "theming_group" }, { field: "project_color", interface: "select-color", note: "$t:field_options.directus_settings.project_color_note", width: "half", group: "theming_group" }, { field: "project_logo", interface: "file", note: "$t:field_options.directus_settings.project_logo_note", width: "half", group: "theming_group" }, { field: "public_foreground", interface: "file", width: "half", group: "theming_group" }, { field: "public_background", interface: "file", width: "half", group: "theming_group" }, { field: "public_favicon", interface: "file", note: "$t:field_options.directus_settings.project_favicon_note", width: "half", group: "theming_group" }, { field: "public_note", interface: "input", options: { placeholder: "$t:field_options.directus_settings.public_note_placeholder", iconRight: "info" }, width: "half", group: "theming_group" }, { field: "theming_divider", interface: "presentation-divider", options: { icon: "palette", title: "$t:fields.directus_settings.theming" }, special: ["alias", "no-data"], width: "full", group: "theming_group" }, { field: "default_appearance", interface: "select-dropdown", width: "half", options: { choices: [{ value: "auto", text: "$t:appearance_auto" }, { value: "light", text: "$t:appearance_light" }, { value: "dark", text: "$t:appearance_dark" }] }, group: "theming_group" }, { field: "default_theme_light", width: "full", interface: "system-theme", options: { appearance: "light" }, group: "theming_group" }, { field: "theme_light_overrides", width: "full", interface: "system-theme-overrides", options: { appearance: "light" }, group: "theming_group", special: ["cast-json"] }, { field: "default_theme_dark", width: "full", interface: "system-theme", options: { appearance: "dark" }, group: "theming_group" }, { field: "theme_dark_overrides", width: "full", interface: "system-theme-overrides", options: { appearance: "dark" }, group: "theming_group", special: ["cast-json"] }, { field: "custom_css", interface: "input-code", options: { language: "css", lineNumber: true, template: `#app, #main-content, body {
  --v-button-background-color: #6644FF !important;
  --v-button-background-color-hover: #5E41EC !important;
}
` }, width: "full", group: "theming_group" }, { field: "modules_divider", interface: "presentation-divider", options: { icon: "menu_open", title: "$t:modules" }, special: ["alias", "no-data"], width: "full" }, { field: "module_bar", interface: "system-modules", special: ["cast-json"] }, { field: "security_divider", interface: "presentation-divider", options: { icon: "shield", title: "$t:security" }, special: ["alias", "no-data"], width: "full" }, { field: "auth_password_policy", interface: "select-dropdown", options: { choices: [{ value: null, text: "$t:field_options.directus_settings.auth_password_policy.none_text" }, { value: "/^.{8,}$/", text: "$t:field_options.directus_settings.auth_password_policy.weak_text" }, { value: "/(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{';'?>.<,])(?!.*\\s).*$/", text: "$t:field_options.directus_settings.auth_password_policy.strong_text" }], allowOther: true }, width: "half" }, { field: "auth_login_attempts", interface: "input", options: { iconRight: "lock", placeholder: "$t:unlimited" }, width: "half" }, { field: "public_registration_divider", interface: "presentation-divider", options: { icon: "person_add", title: "$t:fields.directus_settings.public_registration" }, special: ["alias", "no-data"], width: "full" }, { field: "public_registration", interface: "boolean", note: "$t:fields.directus_settings.public_registration_note", width: "half", options: { label: "$t:enabled" }, special: ["cast-boolean"] }, { field: "public_registration_role", interface: "select-dropdown-m2o", note: "$t:fields.directus_settings.public_registration_role_note", options: { template: "{{ name }}", filter: { admin_access: { _eq: false } } }, special: ["m2o"], width: "half", display: "related-values", display_options: { template: "{{ name }}" } }, { field: "public_registration_verify_email", interface: "boolean", note: "$t:fields.directus_settings.public_registration_verify_email_note", width: "half", options: { label: "$t:enabled" }, special: ["cast-boolean"] }, { field: "public_registration_email_filter", interface: "system-filter", note: "$t:fields.directus_settings.public_registration_email_filter_note", options: { collectionName: "directus_users", collectionField: "email", fieldName: "email" }, special: ["cast-json"], width: "half" }, { field: "files_divider", interface: "presentation-divider", options: { icon: "folder", title: "$t:fields.directus_settings.files_and_thumbnails" }, special: ["alias", "no-data"], width: "full" }, { field: "storage_asset_transform", interface: "select-dropdown", options: { choices: [{ value: "all", text: "$t:fields.directus_settings.transformations_all" }, { value: "none", text: "$t:fields.directus_settings.transformations_none" }, { value: "presets", text: "$t:fields.directus_settings.transformations_presets" }] }, width: "half" }, { field: "storage_default_folder", interface: "system-folder", width: "half", note: "$t:interfaces.system-folder.field_hint" }, { field: "storage_asset_presets", interface: "list", options: { fields: [{ field: "key", name: "$t:key", type: "string", schema: { is_nullable: false }, meta: { interface: "input", options: { slug: true, onlyOnCreate: false }, width: "full", required: true } }, { field: "fit", name: "$t:field_options.directus_settings.storage_asset_presets.fit_label", type: "string", schema: { is_nullable: false }, meta: { interface: "select-dropdown", options: { choices: [{ value: "contain", text: "$t:field_options.directus_settings.storage_asset_presets.fit.contain_text" }, { value: "cover", text: "$t:field_options.directus_settings.storage_asset_presets.fit.cover_text" }, { value: "inside", text: "$t:field_options.directus_settings.storage_asset_presets.fit.fit_text" }, { value: "outside", text: "$t:field_options.directus_settings.storage_asset_presets.fit.outside_text" }] }, width: "half" } }, { field: "width", name: "$t:width", type: "integer", schema: { is_nullable: false }, meta: { interface: "input", width: "half" } }, { field: "height", name: "$t:height", type: "integer", schema: { is_nullable: false }, meta: { interface: "input", width: "half" } }, { field: "quality", type: "integer", name: "$t:quality", schema: { default_value: 80, is_nullable: false }, meta: { interface: "slider", options: { max: 100, min: 0, step: 1 }, width: "half" } }, { field: "withoutEnlargement", name: "$t:field_options.directus_settings.storage_asset_presets.upscaling", type: "boolean", schema: { default_value: false }, meta: { interface: "boolean", width: "half", options: { label: "$t:no_upscale" } } }, { field: "format", name: "$t:format", type: "string", schema: { is_nullable: false, default_value: "" }, meta: { interface: "select-dropdown", options: { allowNone: true, choices: [{ value: "auto", text: "Auto" }, { value: "jpeg", text: "JPEG" }, { value: "png", text: "PNG" }, { value: "webp", text: "WebP" }, { value: "tiff", text: "Tiff" }, { value: "avif", text: "AVIF" }] }, width: "half" } }, { field: "transforms", name: "$t:field_options.directus_settings.additional_transforms", type: "json", schema: { is_nullable: false, default_value: [] }, meta: { note: "$t:field_options.directus_settings.transforms_note", interface: "json", options: { template: `[
  ["blur", 45],
  ["grayscale"],
  ["extend", { "right": 500, "background": "rgb(255, 0, 0)" }]
]
`, placeholder: `[
  ["blur", 45],
  ["grayscale"],
  ["extend", { "right": 500, "background": "rgb(255, 0, 0)" }]
]
` }, width: "full" } }], template: "{{key}}" }, special: ["cast-json"], width: "full" }, { field: "reporting_divider", interface: "presentation-divider", options: { icon: "feedback", title: "$t:fields.directus_settings.reporting" }, special: ["alias", "no-data"], width: "full" }, { field: "report_feature_url", interface: "input", options: { iconRight: "link", placeholder: "https://example.com/feature" }, width: "half" }, { field: "report_bug_url", interface: "input", options: { iconRight: "link", placeholder: "https://example.com/bug" }, width: "half" }, { field: "report_error_url", interface: "system-display-template", options: { placeholder: "https://example.com/error", fields: [{ name: "Error", field: "error", key: "error", path: "error", children: [{ name: "Name", field: "name", key: "error.name", path: "error.name" }, { name: "Message", field: "message", key: "error.message", path: "error.message" }] }, { name: "Navigator", field: "navigator", key: "navigator", path: "navigator", children: [{ name: "Language", field: "language", key: "navigator.language", path: "navigator.language" }, { name: "User Agent", field: "userAgent", key: "navigator.userAgent", path: "navigator.userAgent" }] }, { name: "Route", field: "route", key: "route", path: "route", children: [{ name: "Full Path", field: "fullPath", key: "route.fullPath", path: "route.fullPath" }, { name: "Hash", field: "hash", key: "route.hash", path: "route.hash" }, { name: "Name", field: "name", key: "route.name", path: "route.name" }, { name: "Path", field: "path", key: "route.path", path: "route.path" }, { name: "Query", field: "query", key: "route.query", path: "route.query" }] }, { name: "User", field: "user", key: "user", path: "user", children: [{ name: "ID", field: "id", key: "user.id", path: "user.id" }, { name: "First Name", field: "first_name", key: "user.first_name", path: "user.first_name" }, { name: "Last Name", field: "last_name", key: "user.last_name", path: "user.last_name" }, { name: "Status", field: "status", key: "user.status", path: "user.status" }, { name: "Title", field: "title", key: "user.title", path: "user.title" }, { name: "Description", field: "description", key: "user.description", path: "user.description" }, { name: "Location", field: "location", key: "user.location", path: "user.location" }] }, { name: "Role", field: "role", key: "role", path: "role", children: [{ name: "ID", field: "id", key: "role.id", path: "role.id" }, { name: "Name", field: "name", key: "role.name", path: "role.name" }] }] }, width: "full" }, { field: "map_divider", interface: "presentation-divider", options: { icon: "map", title: "$t:fields.directus_settings.mapping" }, special: ["alias", "no-data"], width: "full" }, { field: "mapbox_key", interface: "input", options: { icon: "key", title: "$t:field_options.directus_settings.mapbox_key", placeholder: "$t:field_options.directus_settings.mapbox_placeholder", iconLeft: "vpn_key", font: "monospace" }, width: "full" }, { field: "basemaps", interface: "list", special: ["cast-json"], options: { template: "{{name}}", fields: [{ field: "name", name: "$t:name", schema: { is_nullable: false }, meta: { interface: "text-input", required: true, options: { placeholder: "$t:field_options.directus_settings.basemaps_name_placeholder" } } }, { field: "type", name: "$t:type", meta: { interface: "select-dropdown", options: { choices: [{ value: "raster", text: "$t:field_options.directus_settings.basemaps_raster" }, { value: "tile", text: "$t:field_options.directus_settings.basemaps_tile" }, { value: "style", text: "$t:field_options.directus_settings.basemaps_style" }] } } }, { field: "url", name: "$t:url", schema: { is_nullable: false }, meta: { interface: "text-input", options: { placeholder: "http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png" } } }, { field: "tileSize", name: "$t:tile_size", type: "integer", schema: { is_nullable: true }, meta: { interface: "input", options: { placeholder: "512" }, conditions: [{ name: "typeNeqRaster", rule: { type: { _neq: "raster" } }, hidden: true }] } }, { field: "attribution", name: "$t:fields.directus_settings.attribution", type: "string", schema: { is_nullable: true }, meta: { interface: "input", options: { placeholder: "$t:fields.directus_settings.attribution_placeholder" } } }] } }, { field: "image_editor", interface: "presentation-divider", options: { icon: "image", title: "$t:fields.directus_settings.image_editor" }, special: ["alias", "no-data"], width: "full" }, { field: "custom_aspect_ratios", interface: "list", special: ["cast-json"], options: { template: "{{text}}", fields: [{ field: "text", name: "$t:text", type: "string", meta: { interface: "text-input", width: "half", required: true, options: { placeholder: "$t:text" } } }, { field: "value", name: "$t:value", type: "float", meta: { interface: "input", width: "half", required: true, options: { placeholder: "$t:value" } } }] } }] };
var y = { table: "directus_users", fields: [{ field: "first_name", interface: "input", options: { iconRight: "account_circle" }, width: "half" }, { field: "last_name", interface: "input", options: { iconRight: "account_circle" }, width: "half" }, { field: "email", interface: "input", options: { iconRight: "email" }, width: "half" }, { field: "password", special: ["hash", "conceal"], interface: "input-hash", options: { iconRight: "lock", masked: true }, width: "half" }, { field: "avatar", interface: "file", width: "full", display: "image" }, { field: "location", interface: "input", options: { iconRight: "place" }, width: "half" }, { field: "title", interface: "input", options: { iconRight: "work" }, width: "half" }, { field: "description", interface: "input-multiline", width: "full" }, { field: "tags", interface: "tags", special: ["cast-json"], width: "full", options: { iconRight: "local_offer" }, display: "labels", display_options: { choices: null, format: false } }, { field: "preferences_divider", interface: "presentation-divider", options: { icon: "face", title: "$t:fields.directus_users.user_preferences" }, special: ["alias", "no-data"], width: "full" }, { field: "language", interface: "system-language", width: "half", options: { includeProjectDefault: true } }, { field: "tfa_secret", interface: "system-mfa-setup", special: ["conceal"], width: "half" }, { field: "email_notifications", interface: "boolean", width: "half", special: ["cast-boolean"] }, { field: "theming_divider", interface: "presentation-divider", options: { icon: "palette", title: "$t:theme" }, special: ["alias", "no-data"], width: "full" }, { field: "appearance", interface: "select-dropdown", options: { choices: [{ value: null, text: "$t:default_sync_with_project" }, { value: "auto", text: "$t:appearance_auto" }, { value: "light", text: "$t:appearance_light" }, { value: "dark", text: "$t:appearance_dark" }] }, width: "half" }, { field: "theme_light", width: "full", interface: "system-theme", options: { appearance: "light", includeNull: true } }, { field: "theme_light_overrides", width: "full", interface: "system-theme-overrides", options: { appearance: "light" }, special: ["cast-json"] }, { field: "theme_dark", width: "full", interface: "system-theme", options: { appearance: "dark", includeNull: true } }, { field: "theme_dark_overrides", width: "full", interface: "system-theme-overrides", options: { appearance: "dark" }, special: ["cast-json"] }, { field: "admin_divider", interface: "presentation-divider", options: { icon: "verified_user", title: "$t:fields.directus_users.admin_options", color: "var(--theme--danger)" }, special: ["alias", "no-data"], width: "full" }, { field: "status", interface: "select-dropdown", options: { choices: [{ text: "$t:fields.directus_users.status_draft", value: "draft" }, { text: "$t:fields.directus_users.status_invited", value: "invited" }, { text: "$t:fields.directus_users.status_unverified", value: "unverified" }, { text: "$t:fields.directus_users.status_active", value: "active" }, { text: "$t:fields.directus_users.status_suspended", value: "suspended" }, { text: "$t:fields.directus_users.status_archived", value: "archived" }] }, width: "half" }, { field: "role", interface: "select-dropdown-m2o", options: { template: "{{ name }}" }, special: ["m2o"], width: "half", display: "related-values", display_options: { template: "{{ name }}" } }, { field: "token", interface: "system-token", special: ["conceal"], width: "full" }, { field: "id", special: ["uuid"], interface: "input", options: { iconRight: "vpn_key" }, width: "full" }, { field: "last_page", width: "half" }, { field: "last_access", width: "half", display: "datetime", readonly: true, display_options: { relative: true } }, { field: "provider", width: "half", interface: "select-dropdown", options: { choices: [{ text: "$t:default_provider", value: "default" }] } }, { field: "external_identifier", width: "half", options: { iconRight: "account_circle" }, interface: "input" }, { field: "auth_data", hidden: true }] };
var w = { table: "directus_webhooks", fields: [{ field: "id", hidden: true }, { field: "name", interface: "input", options: { iconRight: "title" }, width: "full" }, { field: "method", interface: "select-dropdown", display: "labels", display_options: { choices: [{ value: "POST", foreground: "var(--theme--primary)", background: "var(--theme--primary-subdued)" }, { value: "GET", foreground: "var(--theme--secondary)", background: "var(--secondary-25)" }], format: false }, options: { choices: ["GET", "POST"] }, width: "half" }, { field: "url", interface: "input", options: { iconRight: "link" }, width: "half" }, { field: "status", interface: "select-dropdown", display: "labels", display_options: { showAsDot: true, choices: [{ text: "$t:field_options.directus_webhooks.status_options_active", value: "active", foreground: "var(--theme--primary-background)", background: "var(--theme--primary)" }, { text: "$t:field_options.directus_webhooks.status_options_inactive", value: "inactive", foreground: "var(--theme--foreground)", background: "var(--background-normal-alt)" }] }, options: { choices: [{ text: "$t:field_options.directus_webhooks.status_options_active", value: "active" }, { text: "$t:field_options.directus_webhooks.status_options_inactive", value: "inactive" }] }, width: "half" }, { field: "data", interface: "boolean", options: { label: "$t:fields.directus_webhooks.data_label" }, special: ["cast-boolean"], width: "half", display: "boolean" }, { field: "headers", special: ["cast-json"], interface: "list", options: { template: "{{ header }}: {{ value }}", addLabel: "$t:field_options.directus_webhooks.headers.add", fields: [{ field: "header", name: "$t:field_options.directus_webhooks.headers.header", type: "string", meta: { interface: "input", width: "half" } }, { field: "value", name: "$t:field_options.directus_webhooks.headers.value", type: "string", meta: { interface: "input", width: "half" } }] }, width: "full" }, { field: "triggers_divider", interface: "presentation-divider", options: { icon: "api", title: "$t:fields.directus_webhooks.triggers" }, special: ["alias", "no-data"], width: "full" }, { field: "actions", interface: "select-multiple-checkbox", options: { choices: [{ text: "$t:create", value: "create" }, { text: "$t:update", value: "update" }, { text: "$t:delete_label", value: "delete" }] }, special: ["cast-csv"], width: "full", display: "labels", display_options: { choices: [{ text: "$t:create", value: "create", foreground: "var(--theme--primary)", background: "var(--theme--primary-subdued)" }, { text: "$t:update", value: "update", foreground: "var(--blue)", background: "var(--blue-25)" }, { text: "$t:delete_label", value: "delete", foreground: "var(--theme--danger)", background: "var(--danger-25)" }, { text: "$t:login", value: "login", foreground: "var(--purple)", background: "var(--purple-25)" }] } }, { field: "collections", interface: "system-collections", special: ["cast-csv"], width: "full", display: "labels", display_options: { choices: null, format: false } }, { field: "was_active_before_deprecation", hidden: true }, { field: "migrated_flow", hidden: true }] };
var v = { table: "directus_dashboards", fields: [{ field: "id", special: ["uuid"] }, { field: "name" }, { field: "icon" }, { field: "panels", special: ["o2m"] }, { field: "date_created", special: ["date-created", "cast-timestamp"] }, { field: "user_created", special: ["user-created"] }, { field: "note" }, { field: "color" }] };
var b = { table: "directus_panels", fields: [{ field: "id", special: ["uuid"] }, { field: "name" }, { field: "icon" }, { field: "color" }, { field: "note" }, { field: "type" }, { field: "show_header", special: ["cast-boolean"] }, { field: "position_x" }, { field: "position_y" }, { field: "width" }, { field: "height" }, { field: "options", special: ["cast-json"] }, { field: "date_created", special: ["date-created", "cast-timestamp"] }, { field: "user_created", special: ["user-created"] }, { field: "dashboard" }] };
var $ = { table: "directus_notifications", fields: [{ field: "id" }, { field: "timestamp", special: ["date-created", "cast-timestamp"] }, { field: "status" }, { field: "recipient" }, { field: "sender" }, { field: "subject" }, { field: "message" }, { field: "collection" }, { field: "item" }] };
var k = { table: "directus_shares", fields: [{ field: "id", special: ["uuid"], readonly: true, hidden: true }, { field: "name" }, { field: "collection", width: "half", hidden: true }, { field: "item", width: "half", hidden: true }, { field: "role", interface: "select-dropdown-m2o", width: "half", options: { template: "{{name}}", filter: { admin_access: { _eq: false } } } }, { field: "password", special: ["hash", "conceal"], interface: "input-hash", options: { iconRight: "lock", masked: true }, width: "half", note: "$t:shared_leave_blank_for_passwordless_access" }, { field: "date_start", width: "half", note: "$t:shared_leave_blank_for_unlimited" }, { field: "date_end", width: "half", note: "$t:shared_leave_blank_for_unlimited" }, { field: "max_uses", width: "half", note: "$t:shared_leave_blank_for_unlimited" }, { field: "times_used", width: "half", readonly: true }, { field: "date_created", special: ["date-created", "cast-timestamp"], width: "half", readonly: true, conditions: [{ name: "notCreatedYet", rule: { id: { _null: true } }, hidden: true }] }, { field: "user_created", special: ["user-created"], interface: "select-dropdown-m2o", width: "half", display: "user", options: { template: "{{avatar.$thumbnail}} {{first_name}} {{last_name}}" }, readonly: true, conditions: [{ name: "notCreatedYet", rule: { id: { _null: true } }, hidden: true }] }] };
var x = { table: "directus_flows", fields: [{ field: "id", special: ["uuid"] }, { field: "name" }, { field: "icon" }, { field: "color" }, { field: "description" }, { field: "status" }, { field: "trigger" }, { field: "accountability" }, { field: "options", special: ["cast-json"] }, { field: "operation" }, { field: "operations", special: ["o2m"] }, { field: "date_created", special: ["date-created"] }, { field: "user_created", special: ["user-created"] }] };
var R = { table: "directus_operations", fields: [{ field: "id", special: ["uuid"] }, { field: "name" }, { field: "key" }, { field: "type" }, { field: "position_x" }, { field: "position_y" }, { field: "options", special: ["cast-json"] }, { field: "resolve" }, { field: "reject" }, { field: "flow" }, { field: "date_created", special: ["date-created"] }, { field: "user_created", special: ["user-created"] }] };
var j = { table: "directus_translations", fields: [{ field: "id", hidden: true, sort: 1, special: ["uuid"] }, { field: "key", width: "half", sort: 2, required: true, interface: "input", options: { font: "monospace", placeholder: "$t:translation_key_placeholder" } }, { field: "language", interface: "system-language", width: "half", sort: 3, required: true }, { field: "value", interface: "input-multiline", sort: 4, required: true, options: { placeholder: "$t:enter_a_value" } }] };
var F = { table: "directus_versions", fields: [{ field: "id", special: ["uuid"], readonly: true, hidden: true }, { field: "key" }, { field: "name" }, { field: "collection" }, { field: "item" }, { field: "hash", readonly: true, hidden: true }, { field: "date_created", special: ["date-created", "cast-timestamp"] }, { field: "date_updated", special: ["date-updated", "cast-timestamp"] }, { field: "user_created", special: ["user-created"] }, { field: "user_updated", special: ["user-updated"] }] };
var q = { table: "directus_extensions", fields: [{ collection: "directus_extensions", field: "id", special: ["uuid"] }, { collection: "directus_extensions", field: "folder" }, { collection: "directus_extensions", field: "source" }, { collection: "directus_extensions", field: "bundle" }, { collection: "directus_extensions", field: "enabled", special: ["cast-boolean"] }] };
var ce = [];
e(a);
e(s);
e(n);
e(d);
e(r);
e(c);
e(f);
e(u);
e(p);
e(_);
e(h);
e(m);
e(g);
e(y);
e(w);
e(v);
e(b);
e($);
e(k);
e(x);
e(R);
e(j);
e(F);
e(q);
function e(i) {
  let { fields: P, table: U2 } = i;
  P.forEach((T, S) => {
    ce.push(__spreadProps(__spreadValues(__spreadValues({ system: true }, o), T), { collection: U2, sort: S + 1 }));
  });
}
var E = [{ collection: "directus_collections", action: "read" }, { collection: "directus_fields", action: "read" }, { collection: "directus_permissions", action: "read", permissions: { role: { _eq: "$CURRENT_ROLE" } } }, { collection: "directus_relations", action: "read" }];
var N = [{ collection: "directus_activity", action: "read", permissions: { user: { _eq: "$CURRENT_USER" } } }, { collection: "directus_activity", action: "create", validation: { comment: { _nnull: true } } }, { collection: "directus_presets", action: "read", permissions: { _or: [{ user: { _eq: "$CURRENT_USER" } }, { _and: [{ user: { _null: true } }, { role: { _eq: "$CURRENT_ROLE" } }] }, { _and: [{ user: { _null: true } }, { role: { _null: true } }] }] } }, { collection: "directus_presets", action: "create", validation: { user: { _eq: "$CURRENT_USER" } } }, { collection: "directus_presets", action: "update", permissions: { user: { _eq: "$CURRENT_USER" } } }, { collection: "directus_presets", action: "delete", permissions: { user: { _eq: "$CURRENT_USER" } } }, { collection: "directus_roles", action: "read", permissions: { id: { _eq: "$CURRENT_ROLE" } } }, { collection: "directus_settings", action: "read" }, { collection: "directus_translations", action: "read" }, { collection: "directus_notifications", action: "read", permissions: { recipient: { _eq: "$CURRENT_USER" } } }, { collection: "directus_notifications", action: "update", permissions: { recipient: { _eq: "$CURRENT_USER" } }, fields: ["status"] }, { collection: "directus_shares", action: "read", permissions: { user_created: { _eq: "$CURRENT_USER" } } }, { collection: "directus_users", action: "read", permissions: { id: { _eq: "$CURRENT_USER" } }, fields: ["id", "first_name", "last_name", "last_page", "email", "password", "location", "title", "description", "tags", "preferences_divider", "avatar", "language", "appearance", "theme_light", "theme_dark", "tfa_secret", "status", "role"] }];
var C = { role: null, permissions: {}, validation: null, presets: null, fields: ["*"], system: true };
var pe = E.map((i) => __spreadValues(__spreadValues({}, C), i));
var xi = [...pe, ...N].map((i) => __spreadValues(__spreadValues({}, C), i));

// node_modules/@directus/sdk/dist/index.js
function I(e2) {
  return e2 ? `/auth/login/${e2}` : "/auth/login";
}
var E2 = "/";
var G = (e2, t2) => (e2.endsWith(E2) && (e2 = e2.slice(0, -1)), t2.startsWith(E2) || (t2 = E2 + t2), e2 + t2);
var b2 = (e2, t2, r2) => {
  let s2 = e2.pathname === E2 ? t2 : G(e2.pathname, t2), a2 = new globalThis.URL(s2, e2);
  if (r2)
    for (let [p2, i] of Object.entries(N2(r2)))
      if (i && typeof i == "object" && !Array.isArray(i))
        for (let [c2, y2] of Object.entries(i))
          a2.searchParams.set(`${p2}[${c2}]`, String(y2));
      else
        a2.searchParams.set(p2, i);
  return a2;
};
function U(e2) {
  return typeof e2 != "object" || !e2 ? false : "headers" in e2 && "ok" in e2 && "json" in e2 && typeof e2.json == "function" && "text" in e2 && typeof e2.json == "function";
}
function J(e2) {
  return __async(this, null, function* () {
    if (!(typeof e2 != "object" || !e2)) {
      if (U(e2)) {
        let t2 = e2.headers.get("Content-Type")?.toLowerCase();
        if (t2?.startsWith("application/json") || t2?.startsWith("application/health+json")) {
          let r2 = yield e2.json();
          if (!e2.ok)
            throw r2;
          return "data" in r2 ? r2.data : r2;
        }
        if (t2?.startsWith("text/html") || t2?.startsWith("text/plain")) {
          let r2 = yield e2.text();
          if (!e2.ok)
            throw r2;
          return r2;
        }
        return e2;
      }
      return "data" in e2 ? e2.data : e2;
    }
  });
}
var D2 = (_0, _1, ..._2) => __async(void 0, [_0, _1, ..._2], function* (e2, t2, r2 = globalThis.fetch) {
  return t2.headers = typeof t2.headers == "object" && !Array.isArray(t2.headers) ? t2.headers : {}, r2(e2, t2).then((s2) => J(s2).catch((a2) => {
    let p2 = typeof a2 == "object" && "errors" in a2 ? a2.errors : a2;
    return Promise.reject({ errors: p2, response: s2 });
  }));
});
var $2 = () => {
  let e2 = null;
  return { get: () => __async(void 0, null, function* () {
    return e2;
  }), set: (t2) => __async(void 0, null, function* () {
    e2 = t2;
  }) };
};
var L = { msRefreshBeforeExpires: 3e4, autoRefresh: true };
var H = 2 ** 31 - 1;
var ce2 = (e2 = "cookie", t2 = {}) => (r2) => {
  let s2 = __spreadValues(__spreadValues({}, L), t2), a2 = null, p2 = null, i = s2.storage ?? $2(), c2 = () => {
    i.set({ access_token: null, refresh_token: null, expires: null, expires_at: null });
  }, y2 = () => __async(void 0, null, function* () {
    try {
      yield a2;
    } finally {
      a2 = null;
    }
  }), x2 = () => __async(void 0, null, function* () {
    let d2 = yield i.get();
    return a2 || !d2?.expires_at || d2.expires_at < (/* @__PURE__ */ new Date()).getTime() + s2.msRefreshBeforeExpires && T().catch((l2) => {
    }), y2();
  }), O = (d2) => {
    let l2 = d2.expires ?? 0;
    d2.expires_at = (/* @__PURE__ */ new Date()).getTime() + l2, i.set(d2), s2.autoRefresh && l2 > s2.msRefreshBeforeExpires && l2 < H && (p2 && clearTimeout(p2), p2 = setTimeout(() => {
      p2 = null, T().catch((f2) => {
      });
    }, l2 - s2.msRefreshBeforeExpires));
  }, T = () => __async(void 0, null, function* () {
    return a2 = (() => __async(void 0, null, function* () {
      let l2 = yield i.get();
      c2();
      let f2 = { method: "POST", headers: { "Content-Type": "application/json" } };
      "credentials" in s2 && (f2.credentials = s2.credentials);
      let m2 = { mode: e2 };
      e2 === "json" && l2?.refresh_token && (m2.refresh_token = l2.refresh_token), f2.body = JSON.stringify(m2);
      let n2 = b2(r2.url, "/auth/refresh");
      return D2(n2.toString(), f2, r2.globals.fetch).then((u2) => (O(u2), u2));
    }))(), a2;
  });
  return { refresh: T, login(_0, _1) {
    return __async(this, arguments, function* (d2, l2, f2 = {}) {
      c2();
      let m2 = { email: d2, password: l2 };
      "otp" in f2 && (m2.otp = f2.otp), m2.mode = f2.mode ?? e2;
      let n2 = I(f2.provider), u2 = b2(r2.url, n2), h2 = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(m2) };
      "credentials" in s2 && (h2.credentials = s2.credentials);
      let g2 = yield D2(u2.toString(), h2, r2.globals.fetch);
      return O(g2), g2;
    });
  }, logout() {
    return __async(this, null, function* () {
      let d2 = yield i.get(), l2 = { method: "POST", headers: { "Content-Type": "application/json" } };
      "credentials" in s2 && (l2.credentials = s2.credentials);
      let f2 = { mode: e2 };
      e2 === "json" && d2?.refresh_token && (f2.refresh_token = d2.refresh_token), l2.body = JSON.stringify(f2);
      let m2 = b2(r2.url, "/auth/logout");
      yield D2(m2.toString(), l2, r2.globals.fetch), this.stopRefreshing(), c2();
    });
  }, stopRefreshing() {
    p2 && clearTimeout(p2);
  }, getToken() {
    return __async(this, null, function* () {
      return yield x2().catch(() => {
      }), (yield i.get())?.access_token ?? null;
    });
  }, setToken(d2) {
    i.set({ access_token: d2, refresh_token: null, expires: null, expires_at: null });
  } };
};
var ue = (e2) => (t2) => {
  let r2 = e2 ?? null;
  return { getToken() {
    return __async(this, null, function* () {
      return r2;
    });
  }, setToken(s2) {
    r2 = s2;
  } };
};
var k2 = { fetch: globalThis.fetch, WebSocket: globalThis.WebSocket, URL: globalThis.URL, logger: globalThis.console };
var fe = (e2, t2 = {}) => {
  let r2 = t2.globals ? __spreadValues(__spreadValues({}, k2), t2.globals) : k2;
  return { globals: r2, url: new r2.URL(e2), with(s2) {
    return __spreadValues(__spreadValues({}, this), s2(this));
  } };
};
var V = {};
var Ce = (e2 = {}) => (t2) => {
  let r2 = __spreadValues(__spreadValues({}, V), e2);
  return { query(s2, a2, p2 = "items") {
    return __async(this, null, function* () {
      let i = { method: "POST", body: JSON.stringify({ query: s2, variables: a2 }) };
      "credentials" in r2 && (i.credentials = r2.credentials);
      let c2 = {};
      if ("getToken" in this) {
        let O = yield this.getToken();
        O && (c2.Authorization = `Bearer ${O}`);
      }
      "Content-Type" in c2 || (c2["Content-Type"] = "application/json"), i.headers = c2;
      let y2 = p2 === "items" ? "/graphql" : "/graphql/system", x2 = b2(t2.url, y2);
      return yield D2(x2.toString(), i, t2.globals.fetch);
    });
  } };
};
function A(e2) {
  return JSON.stringify(__spreadProps(__spreadValues({}, e2), { type: "auth" }));
}
var K = () => JSON.stringify({ type: "pong" });
var F2 = (e2, t2 = 1e3) => new Promise((r2, s2) => {
  let a2 = (y2) => {
    try {
      let x2 = JSON.parse(y2.data);
      typeof x2 == "object" && !Array.isArray(x2) && x2 !== null ? (i(), r2(x2)) : (i(), p2());
    } catch {
      i(), r2(y2);
    }
  }, p2 = () => s2(), i = () => {
    clearTimeout(c2), e2.removeEventListener("message", a2), e2.removeEventListener("error", p2), e2.removeEventListener("close", p2);
  };
  e2.addEventListener("message", a2), e2.addEventListener("error", p2), e2.addEventListener("close", p2);
  let c2 = setTimeout(() => {
    i(), r2(void 0);
  }, t2);
});
function* w2() {
  let e2 = 1;
  for (; ; )
    yield String(e2), e2++;
}
var M = { authMode: "handshake", heartbeat: true, debug: false, reconnect: { delay: 1e3, retries: 10 } };
function Ue(e2 = {}) {
  return (t2) => {
    e2 = __spreadValues(__spreadValues({}, M), e2);
    let r2 = w2(), s2 = { code: "closed" }, a2 = { attempts: 0, active: false }, p2 = /* @__PURE__ */ new Set(), i = (m2) => "getToken" in m2, c2 = (m2, ...n2) => e2.debug && t2.globals.logger[m2]("[Directus SDK]", ...n2), y2 = (m2, n2) => __async(this, null, function* () {
      let u2 = new t2.globals.URL(m2);
      if (e2.authMode === "strict" && i(n2)) {
        let h2 = yield n2.getToken();
        h2 && u2.searchParams.set("access_token", h2);
      }
      return u2.toString();
    }), x2 = (m2) => __async(this, null, function* () {
      if ("url" in e2)
        return yield y2(e2.url, m2);
      if (["ws:", "wss:"].includes(t2.url.protocol))
        return yield y2(t2.url, m2);
      let n2 = new t2.globals.URL(t2.url.toString());
      return n2.protocol = t2.url.protocol === "https:" ? "wss:" : "ws:", n2.pathname = "/websocket", yield y2(n2, m2);
    }), O = (m2) => {
      let n2 = new Promise((u2, h2) => {
        if (!e2.reconnect)
          return h2();
        if (c2("info", `reconnect #${a2.attempts} ` + (a2.attempts >= e2.reconnect.retries ? "maximum retries reached" : `trying again in ${Math.max(100, e2.reconnect.delay)}ms`)), a2.active)
          return a2.active;
        if (a2.attempts >= e2.reconnect.retries)
          return h2();
        setTimeout(() => m2.connect().then((g2) => (p2.forEach((S) => {
          m2.sendMessage(S);
        }), g2)).then(u2).catch(h2), Math.max(100, e2.reconnect.delay));
      });
      a2.attempts += 1, a2.active = n2.catch(() => {
      }).finally(() => {
        a2.active = false;
      });
    }, T = { open: /* @__PURE__ */ new Set([]), error: /* @__PURE__ */ new Set([]), close: /* @__PURE__ */ new Set([]), message: /* @__PURE__ */ new Set([]) };
    function d2(m2) {
      return "type" in m2 && "status" in m2 && "error" in m2 && "code" in m2.error && "message" in m2.error && m2.type === "auth" && m2.status === "error";
    }
    function l2(m2, n2) {
      return __async(this, null, function* () {
        if (s2.code === "open") {
          if (m2.error.code === "TOKEN_EXPIRED" && (c2("warn", "Authentication token expired!"), i(n2))) {
            let u2 = yield n2.getToken();
            if (!u2)
              throw Error("No token for re-authenticating the websocket");
            s2.connection.send(A({ access_token: u2 }));
          }
          if (m2.error.code === "AUTH_TIMEOUT")
            return s2.firstMessage && e2.authMode === "public" ? (c2("warn", 'Authentication failed! Currently the "authMode" is "public" try using "handshake" instead'), e2.reconnect = false) : c2("warn", "Authentication timed out!"), s2.connection.close();
          if (m2.error.code === "AUTH_FAILED") {
            if (s2.firstMessage && e2.authMode === "public")
              return c2("warn", 'Authentication failed! Currently the "authMode" is "public" try using "handshake" instead'), e2.reconnect = false, s2.connection.close();
            c2("warn", "Authentication failed!");
          }
        }
      });
    }
    let f2 = (m2) => __async(this, null, function* () {
      for (; s2.code === "open"; ) {
        let n2 = yield F2(s2.connection).catch(() => {
        });
        if (n2) {
          if (d2(n2)) {
            yield l2(n2, m2), s2.firstMessage = false;
            continue;
          }
          if (e2.heartbeat && n2.type === "ping") {
            s2.connection.send(K()), s2.firstMessage = false;
            continue;
          }
          T.message.forEach((u2) => {
            s2.code === "open" && u2.call(s2.connection, n2);
          }), s2.firstMessage = false;
        }
      }
    });
    return { connect() {
      return __async(this, null, function* () {
        if (s2.code === "connecting")
          return yield s2.connection;
        if (s2.code !== "closed")
          throw new Error(`Cannot connect when state is "${s2.code}"`);
        let m2 = this, n2 = yield x2(m2);
        c2("info", `Connecting to ${n2}...`);
        let u2 = new Promise((h2, g2) => {
          let S = false, C2 = new t2.globals.WebSocket(n2);
          C2.addEventListener("open", (j2) => __async(this, null, function* () {
            if (c2("info", "Connection open."), s2 = { code: "open", connection: C2, firstMessage: true }, a2.attempts = 0, a2.active = false, f2(m2), e2.authMode === "handshake" && i(m2)) {
              let R2 = yield m2.getToken();
              if (!R2)
                throw Error("No token for authenticating the websocket. Make sure to provide one or call the login() function beforehand.");
              C2.send(A({ access_token: R2 }));
              let P = yield F2(C2);
              if (P && "type" in P && "status" in P && P.type === "auth" && P.status === "ok")
                c2("info", "Authentication successful!");
              else
                return g2("Authentication failed while opening websocket connection");
            }
            T.open.forEach((R2) => R2.call(C2, j2)), S = true, h2(C2);
          })), C2.addEventListener("error", (j2) => {
            c2("warn", "Connection errored."), T.error.forEach((R2) => R2.call(C2, j2)), C2.close(), s2 = { code: "error" }, S || g2(j2);
          }), C2.addEventListener("close", (j2) => {
            c2("info", "Connection closed."), T.close.forEach((R2) => R2.call(C2, j2)), r2 = w2(), s2 = { code: "closed" }, O(this), S || g2(j2);
          });
        });
        return s2 = { code: "connecting", connection: u2 }, u2;
      });
    }, disconnect() {
      s2.code === "open" && s2.connection.close();
    }, onWebSocket(m2, n2) {
      if (m2 === "message") {
        let u2 = function(h2) {
          if (typeof h2.data != "string")
            return n2.call(this, h2);
          try {
            return n2.call(this, JSON.parse(h2.data));
          } catch {
            return n2.call(this, h2);
          }
        };
        return T[m2].add(u2), () => T[m2].delete(u2);
      }
      return T[m2].add(n2), () => T[m2].delete(n2);
    }, sendMessage(m2) {
      if (s2.code !== "open")
        throw new Error('Cannot send messages without an open connection. Make sure you are calling "await client.connect()".');
      if (typeof m2 == "string")
        return s2.connection.send(m2);
      "uid" in m2 || (m2.uid = r2.next().value), s2.connection.send(JSON.stringify(m2));
    }, subscribe(_0) {
      return __async(this, arguments, function* (m2, n2 = {}) {
        "uid" in n2 || (n2.uid = r2.next().value), p2.add(__spreadProps(__spreadValues({}, n2), { collection: m2, type: "subscribe" })), s2.code !== "open" && (c2("info", "No connection available for subscribing!"), yield this.connect()), this.sendMessage(__spreadProps(__spreadValues({}, n2), { collection: m2, type: "subscribe" }));
        let u2 = true;
        function h2() {
          return __asyncGenerator(this, null, function* () {
            for (; u2 && s2.code === "open"; ) {
              let S = yield new __await(F2(s2.connection).catch(() => {
              }));
              if (S) {
                if ("type" in S && "status" in S && S.type === "subscribe" && S.status === "error")
                  throw S;
                "type" in S && "uid" in S && S.type === "subscription" && S.uid === n2.uid && (yield S);
              }
            }
            e2.reconnect && a2.active && (yield new __await(a2.active), s2.code === "open" && (s2.connection.send(JSON.stringify(__spreadProps(__spreadValues({}, n2), { collection: m2, type: "subscribe" }))), yield* __yieldStar(h2())));
          });
        }
        let g2 = () => {
          p2.delete(__spreadProps(__spreadValues({}, n2), { collection: m2, type: "subscribe" })), this.sendMessage({ uid: n2.uid, type: "unsubscribe" }), u2 = false;
        };
        return { subscription: h2(), unsubscribe: g2 };
      });
    } };
  };
}
var $e = (e2) => new Promise((t2) => setTimeout(() => t2(), e2));
var ze = (e2, t2, r2 = {}) => () => {
  let s2 = I(r2.provider), a2 = { email: e2, password: t2 };
  return "otp" in r2 && (a2.otp = r2.otp), a2.mode = r2.mode ?? "cookie", { path: s2, method: "POST", body: JSON.stringify(a2) };
};
var Ye = (e2, t2 = "cookie") => () => ({ path: "/auth/logout", method: "POST", body: JSON.stringify(e2 ? { refresh_token: e2, mode: t2 } : { mode: t2 }) });
var et = (e2, t2) => () => ({ path: "/auth/password/request", method: "POST", body: JSON.stringify(__spreadValues({ email: e2 }, t2 ? { reset_url: t2 } : {})) });
var rt = (e2, t2) => () => ({ path: "/auth/password/reset", method: "POST", body: JSON.stringify({ token: e2, password: t2 }) });
var st = (e2 = false) => () => ({ path: e2 ? "/auth?sessionOnly" : "/auth", method: "GET" });
var mt = (e2 = "cookie", t2) => () => ({ path: "/auth/refresh", method: "POST", body: JSON.stringify(e2 === "json" ? { refresh_token: t2, mode: e2 } : { mode: e2 }) });
var St = (e2, t2) => () => ({ path: "/activity/comment", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var ft = (e2, t2) => () => ({ path: "/collections", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Qt = (e2, t2) => () => ({ path: "/dashboards", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Tt = (e2, t2) => () => ({ path: "/dashboards", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var gt = (e2, t2, r2) => () => ({ path: `/fields/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "POST" });
var bt = (e2, t2) => () => ({ path: "/files", method: "POST", body: e2, params: t2 ?? {}, headers: { "Content-Type": "multipart/form-data" } });
var Dt = (e2, t2 = {}, r2) => () => ({ path: "/files/import", method: "POST", body: JSON.stringify({ url: e2, data: t2 }), params: r2 ?? {} });
var jt = (e2, t2) => () => ({ path: "/flows", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Pt = (e2, t2) => () => ({ path: "/flows", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Et = (e2, t2) => () => ({ path: "/folders", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Ft = (e2, t2) => () => ({ path: "/folders", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var vt = (e2, t2, r2) => () => {
  let s2 = String(e2);
  if (ge(s2))
    throw new Error("Cannot use createItems for core collections");
  return { path: `/items/${s2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "POST" };
};
var Nt = (e2, t2, r2) => () => {
  let s2 = String(e2);
  if (ge(s2))
    throw new Error("Cannot use createItem for core collections");
  return { path: `/items/${s2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "POST" };
};
var Jt = (e2, t2) => () => ({ path: "/notifications", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var $t = (e2, t2) => () => ({ path: "/notifications", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Kt = (e2, t2) => () => ({ path: "/operations", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Wt = (e2, t2) => () => ({ path: "/operations", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Lt = (e2, t2) => () => ({ path: "/panels", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Ht = (e2, t2) => () => ({ path: "/panels", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Mt = (e2, t2) => () => ({ path: "/permissions", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var _t = (e2, t2) => () => ({ path: "/permissions", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var qt = (e2, t2) => () => ({ path: "/presets", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var zt = (e2, t2) => () => ({ path: "/presets", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Yt = (e2) => () => ({ path: "/relations", body: JSON.stringify(e2), method: "POST" });
var er = (e2, t2) => () => ({ path: "/roles", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var tr = (e2, t2) => () => ({ path: "/roles", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var or = (e2, t2) => () => ({ path: "/shares", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var sr = (e2, t2) => () => ({ path: "/shares", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var mr = (e2, t2) => () => ({ path: "/translations", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var ir = (e2, t2) => () => ({ path: "/translations", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var cr = (e2, t2) => () => ({ path: "/users", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var pr = (e2, t2) => () => ({ path: "/users", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var hr = (e2, t2) => () => ({ path: "/versions", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var yr = (e2, t2) => () => ({ path: "/versions", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var Sr = (e2, t2) => () => ({ path: "/webhooks", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var lr = (e2, t2) => () => ({ path: "/webhooks", params: t2 ?? {}, body: JSON.stringify(e2), method: "POST" });
var kr = (e2) => () => ({ path: `/activity/comment/${e2}`, method: "DELETE" });
var Wr = (e2) => () => ({ path: `/collections/${e2}`, method: "DELETE" });
var v2 = (e2) => {
  let t2 = (r2, s2 = []) => {
    if (typeof r2 == "object") {
      let a2 = [];
      for (let p2 in r2) {
        let i = r2[p2] ?? [];
        if (Array.isArray(i))
          for (let c2 of i)
            a2.push(t2(c2, [...s2, p2]));
        else if (typeof i == "object")
          for (let c2 of Object.keys(i)) {
            let y2 = i[c2];
            for (let x2 of y2)
              a2.push(t2(x2, [...s2, `${p2}:${c2}`]));
          }
      }
      return a2.flatMap((p2) => p2);
    }
    return [...s2, String(r2)].join(".");
  };
  return e2.flatMap((r2) => t2(r2));
};
var N2 = (e2) => {
  let t2 = {};
  Array.isArray(e2.fields) && e2.fields.length > 0 && (t2.fields = v2(e2.fields).join(",")), e2.filter && Object.keys(e2.filter).length > 0 && (t2.filter = JSON.stringify(e2.filter)), e2.search && (t2.search = e2.search), "sort" in e2 && e2.sort && (t2.sort = typeof e2.sort == "string" ? e2.sort : e2.sort.join(",")), typeof e2.limit == "number" && e2.limit >= -1 && (t2.limit = String(e2.limit)), typeof e2.offset == "number" && e2.offset >= 0 && (t2.offset = String(e2.offset)), typeof e2.page == "number" && e2.page >= 1 && (t2.page = String(e2.page)), e2.deep && Object.keys(e2.deep).length > 0 && (t2.deep = JSON.stringify(e2.deep)), e2.alias && Object.keys(e2.alias).length > 0 && (t2.alias = JSON.stringify(e2.alias)), e2.aggregate && Object.keys(e2.aggregate).length > 0 && (t2.aggregate = JSON.stringify(e2.aggregate)), e2.groupBy && e2.groupBy.length > 0 && (t2.groupBy = e2.groupBy.join(","));
  for (let [r2, s2] of Object.entries(e2))
    r2 in t2 || (typeof s2 == "string" || typeof s2 == "number" || typeof s2 == "boolean" ? t2[r2] = String(s2) : t2[r2] = JSON.stringify(s2));
  return t2;
};
var o2 = (e2, t2) => {
  if (e2.length === 0)
    throw new Error(t2);
};
var Q = (e2, t2) => {
  if (ge(String(e2)))
    throw new Error(t2);
};
var Zr = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/dashboards", body: JSON.stringify(e2), method: "DELETE" });
var eo = (e2) => () => (o2(e2, "Key cannot be empty"), { path: `/dashboards/${e2}`, method: "DELETE" });
var oo = (e2, t2) => () => (o2(e2, "Collection cannot be empty"), o2(t2, "Field cannot be empty"), { path: `/fields/${e2}/${t2}`, method: "DELETE" });
var mo = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/files", body: JSON.stringify(e2), method: "DELETE" });
var io = (e2) => () => (o2(e2, "Key cannot be empty"), { path: `/files/${e2}`, method: "DELETE" });
var po = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/flows", body: JSON.stringify(e2), method: "DELETE" });
var uo = (e2) => () => (o2(e2, "Key cannot be empty"), { path: `/flows/${e2}`, method: "DELETE" });
var So = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/folders", body: JSON.stringify(e2), method: "DELETE" });
var lo = (e2) => () => (o2(e2, "Key cannot be empty"), { path: `/folders/${e2}`, method: "DELETE" });
var Qo = (e2, t2) => () => {
  let r2 = {};
  return o2(String(e2), "Collection cannot be empty"), Q(e2, "Cannot use deleteItems for core collections"), Array.isArray(t2) ? (o2(t2, "keysOrQuery cannot be empty"), r2 = { keys: t2 }) : (o2(Object.keys(t2), "keysOrQuery cannot be empty"), r2 = { query: t2 }), { path: `/items/${e2}`, body: JSON.stringify(r2), method: "DELETE" };
};
var To = (e2, t2) => () => (o2(String(e2), "Collection cannot be empty"), Q(e2, "Cannot use deleteItem for core collections"), o2(String(t2), "Key cannot be empty"), { path: `/items/${e2}/${t2}`, method: "DELETE" });
var Ro = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/notifications", body: JSON.stringify(e2), method: "DELETE" });
var bo = (e2) => () => (o2(e2, "Key cannot be empty"), { path: `/notifications/${e2}`, method: "DELETE" });
var jo = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/operations", body: JSON.stringify(e2), method: "DELETE" });
var Po = (e2) => () => (o2(e2, "Key cannot be empty"), { path: `/operations/${e2}`, method: "DELETE" });
var Fo = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/panels", body: JSON.stringify(e2), method: "DELETE" });
var Ao = (e2) => () => (o2(e2, "Key cannot be empty"), { path: `/panels/${e2}`, method: "DELETE" });
var No = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/permissions", body: JSON.stringify(e2), method: "DELETE" });
var Uo = (e2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/permissions/${e2}`, method: "DELETE" });
var ko = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/presets", body: JSON.stringify(e2), method: "DELETE" });
var Ko = (e2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/presets/${e2}`, method: "DELETE" });
var Lo = (e2, t2) => () => (o2(e2, "Collection cannot be empty"), o2(t2, "Field cannot be empty"), { path: `/relations/${e2}/${t2}`, method: "DELETE" });
var Mo = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/roles", body: JSON.stringify(e2), method: "DELETE" });
var _o = (e2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/roles/${e2}`, method: "DELETE" });
var zo = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/shares", body: JSON.stringify(e2), method: "DELETE" });
var Xo = (e2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/shares/${e2}`, method: "DELETE" });
var es = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/translations", body: JSON.stringify(e2), method: "DELETE" });
var ts = (e2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/translations/${e2}`, method: "DELETE" });
var ss = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/users", body: JSON.stringify(e2), method: "DELETE" });
var as = (e2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/users/${e2}`, method: "DELETE" });
var ns = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/versions", body: JSON.stringify(e2), method: "DELETE" });
var cs = (e2) => () => (o2(e2, "Key cannot be empty"), { path: `/versions/${e2}`, method: "DELETE" });
var hs = (e2) => () => (o2(e2, "Keys cannot be empty"), { path: "/webhooks", body: JSON.stringify(e2), method: "DELETE" });
var ys = (e2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/webhooks/${e2}`, method: "DELETE" });
var Js = (e2) => () => ({ path: "/activity", params: e2 ?? {}, method: "GET" });
var $s = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/activity/${e2}`, params: t2 ?? {}, method: "GET" });
var Ls = (e2, t2) => () => {
  let r2 = String(e2);
  return o2(r2, "Collection cannot be empty"), { path: ge(r2) ? `/${r2.substring(9)}` : `/items/${r2}`, method: "GET", params: __spreadProps(__spreadValues(__spreadValues({}, t2.query ?? {}), t2.groupBy ? { groupBy: t2.groupBy } : {}), { aggregate: t2.aggregate }) };
};
var Ms = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/assets/${e2}`, params: t2 ?? {}, method: "GET", onResponse: (r2) => r2.body });
var _s = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/assets/${e2}`, params: t2 ?? {}, method: "GET", onResponse: (r2) => r2.blob() });
var Bs = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/assets/${e2}`, params: t2 ?? {}, method: "GET", onResponse: (r2) => r2.arrayBuffer() });
var Xs = () => () => ({ path: "/collections", method: "GET" });
var Ys = (e2) => () => (o2(e2, "Collection cannot be empty"), { path: `/collections/${e2}`, method: "GET" });
var ta = (e2) => () => ({ path: "/dashboards", params: e2 ?? {}, method: "GET" });
var ra = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/dashboards/${e2}`, params: t2 ?? {}, method: "GET" });
var sa = () => () => ({ path: "/extensions/", method: "GET" });
var ia = () => () => ({ path: "/fields", method: "GET" });
var na = (e2) => () => (o2(e2, "Collection cannot be empty"), { path: `/fields/${e2}`, method: "GET" });
var ca = (e2, t2) => () => (o2(e2, "Collection cannot be empty"), o2(t2, "Field cannot be empty"), { path: `/fields/${e2}/${t2}`, method: "GET" });
var ha = (e2) => () => ({ path: "/files", params: e2 ?? {}, method: "GET" });
var ya = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/files/${e2}`, params: t2 ?? {}, method: "GET" });
var la = (e2) => () => ({ path: "/flows", params: e2 ?? {}, method: "GET" });
var fa = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/flows/${e2}`, params: t2 ?? {}, method: "GET" });
var Ta = (e2) => () => ({ path: "/folders", params: e2 ?? {}, method: "GET" });
var Ca = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/folders/${e2}`, params: t2 ?? {}, method: "GET" });
var ba = (e2, t2) => () => (o2(String(e2), "Collection cannot be empty"), Q(e2, "Cannot use readItems for core collections"), { path: `/items/${e2}`, params: t2 ?? {}, method: "GET" });
var Da = (e2, t2, r2) => () => (o2(String(e2), "Collection cannot be empty"), Q(e2, "Cannot use readItem for core collections"), o2(String(t2), "Key cannot be empty"), { path: `/items/${e2}/${t2}`, params: r2 ?? {}, method: "GET" });
var Pa = (e2) => () => ({ path: "/notifications", params: e2 ?? {}, method: "GET" });
var Ia = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/notifications/${e2}`, params: t2 ?? {}, method: "GET" });
var Aa = (e2) => () => ({ path: "/operations", params: e2 ?? {}, method: "GET" });
var wa = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/operations/${e2}`, params: t2 ?? {}, method: "GET" });
var Ua = (e2) => () => ({ path: "/panels", params: e2 ?? {}, method: "GET" });
var Ja = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/panels/${e2}`, params: t2 ?? {}, method: "GET" });
var Ka = (e2) => () => ({ path: "/permissions", params: e2 ?? {}, method: "GET" });
var Wa = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/permissions/${e2}`, params: t2 ?? {}, method: "GET" });
var Ga = (e2, t2) => () => (o2(String(e2), "Collection cannot be empty"), { path: `/permissions/me/${t2 ? `${e2}/${t2}` : `${e2}`}`, method: "GET" });
var Va = (e2) => () => ({ path: "/presets", params: e2 ?? {}, method: "GET" });
var Ma = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/presets/${e2}`, params: t2 ?? {}, method: "GET" });
var qa = () => () => ({ path: "/relations", method: "GET" });
var za = (e2) => () => ({ path: `/relations/${e2}`, method: "GET" });
var Xa = (e2, t2) => () => (o2(e2, "Collection cannot be empty"), o2(t2, "Field cannot be empty"), { path: `/relations/${e2}/${t2}`, method: "GET" });
var em = (e2) => () => ({ path: "/revisions", params: e2 ?? {}, method: "GET" });
var tm = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/revisions/${e2}`, params: t2 ?? {}, method: "GET" });
var sm = (e2) => () => ({ path: "/roles", params: e2 ?? {}, method: "GET" });
var am = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/roles/${e2}`, params: t2 ?? {}, method: "GET" });
var im = (e2) => () => ({ path: "/settings", params: e2 ?? {}, method: "GET" });
var pm = (e2) => () => ({ path: "/shares", params: e2 ?? {}, method: "GET" });
var um = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/shares/${e2}`, params: t2 ?? {}, method: "GET" });
var dm = (e2, t2) => () => (o2(String(e2), "Collection cannot be empty"), Q(e2, "Cannot use readSingleton for core collections"), { path: `/items/${e2}`, params: t2 ?? {}, method: "GET" });
var fm = (e2) => () => ({ path: "/translations", params: e2 ?? {}, method: "GET" });
var xm = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/translations/${e2}`, params: t2 ?? {}, method: "GET" });
var Cm = (e2) => () => ({ path: "/users", params: e2 ?? {}, method: "GET" });
var gm = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/users/${e2}`, params: t2 ?? {}, method: "GET" });
var Rm = (e2) => () => ({ path: "/users/me", params: e2 ?? {}, method: "GET" });
var Om = (e2) => () => ({ path: "/versions", params: e2 ?? {}, method: "GET" });
var jm = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/versions/${e2}`, params: t2 ?? {}, method: "GET" });
var Em = (e2) => () => ({ path: "/webhooks", params: e2 ?? {}, method: "GET" });
var Fm = (e2, t2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/webhooks/${e2}`, params: t2 ?? {}, method: "GET" });
var mi = (e2) => () => ({ method: "POST", path: "/schema/apply", body: JSON.stringify(e2) });
var ni = (e2, t2 = false) => () => ({ method: "POST", path: "/schema/diff", params: t2 ? { force: t2 } : {}, body: JSON.stringify(e2) });
var pi = () => () => ({ method: "GET", path: "/schema/snapshot" });
var li = (e2 = "item") => () => ({ method: "GET", path: e2 === "item" ? "/server/specs/graphql" : "/server/specs/graphql/system" });
var xi2 = () => () => ({ method: "GET", path: "/server/health" });
var Ti = () => () => ({ method: "GET", path: "/server/info" });
var gi = () => () => ({ method: "GET", path: "/server/specs/oas" });
var bi = () => () => ({ method: "GET", path: "/server/ping" });
var wi = (e2, t2, r2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/activity/comment/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var Ui = (e2, t2, r2) => () => (o2(e2, "Collection cannot be empty"), { path: `/collections/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var ki = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/dashboards", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var Ki = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), { path: `/dashboards/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var Li = (e2, t2, r2) => () => (e2 !== null && o2(e2, "Bundle cannot be an empty string"), o2(t2, "Name cannot be empty"), { path: e2 ? `/extensions/${e2}/${t2}` : `/extensions/${t2}`, params: {}, body: JSON.stringify(r2), method: "PATCH" });
var Mi = (e2, t2, r2, s2) => () => (o2(e2, "Keys cannot be empty"), o2(t2, "Field cannot be empty"), { path: `/fields/${e2}/${t2}`, params: s2 ?? {}, body: JSON.stringify(r2), method: "PATCH" });
var qi = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/files", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var zi = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), t2 instanceof FormData ? { path: `/files/${e2}`, params: r2 ?? {}, body: t2, method: "PATCH", headers: { "Content-Type": "multipart/form-data" } } : { path: `/files/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var Zi = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/flows", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var en = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), { path: `/flows/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var on = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/folders", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var sn = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), { path: `/folders/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var nn = (e2, t2, r2, s2) => () => {
  let a2 = {};
  return o2(String(e2), "Collection cannot be empty"), Q(e2, "Cannot use updateItems for core collections"), Array.isArray(t2) ? (o2(t2, "keysOrQuery cannot be empty"), a2 = { keys: t2 }) : (o2(Object.keys(t2), "keysOrQuery cannot be empty"), a2 = { query: t2 }), a2.data = r2, { path: `/items/${e2}`, params: s2 ?? {}, body: JSON.stringify(a2), method: "PATCH" };
};
var cn = (e2, t2, r2, s2) => () => (o2(String(t2), "Key cannot be empty"), o2(String(e2), "Collection cannot be empty"), Q(e2, "Cannot use updateItem for core collections"), { path: `/items/${e2}/${t2}`, params: s2 ?? {}, body: JSON.stringify(r2), method: "PATCH" });
var hn = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/notifications", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var yn = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), { path: `/notifications/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var ln = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/operations", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var fn = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), { path: `/operations/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var Tn = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/panels", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var Cn = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), { path: `/panels/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var bn = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/permissions", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var Dn = (e2, t2, r2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/permissions/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var Pn = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/presets", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var In = (e2, t2, r2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/presets/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var An = (e2, t2, r2, s2) => () => (o2(e2, "Collection cannot be empty"), o2(t2, "Field cannot be empty"), { path: `/relations/${e2}/${t2}`, params: s2 ?? {}, body: JSON.stringify(r2), method: "PATCH" });
var Nn = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/roles", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var Un = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), { path: `/roles/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var $n = (e2, t2) => () => ({ path: "/settings", params: t2 ?? {}, body: JSON.stringify(e2), method: "PATCH" });
var Wn = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/shares", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var Gn = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), { path: `/shares/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var Vn = (e2, t2, r2) => () => (o2(String(e2), "Collection cannot be empty"), Q(e2, "Cannot use updateSingleton for core collections"), { path: `/items/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var Bn = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/translations", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var qn = (e2, t2, r2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/translations/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var Yn = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/users", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var Zn = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), { path: `/users/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var ec = (e2, t2) => () => ({ path: "/users/me", params: t2 ?? {}, body: JSON.stringify(e2), method: "PATCH" });
var oc = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/versions", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var sc = (e2, t2, r2) => () => (o2(e2, "Key cannot be empty"), { path: `/versions/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var ic = (e2, t2, r2) => () => (o2(e2, "Keys cannot be empty"), { path: "/webhooks", params: r2 ?? {}, body: JSON.stringify({ keys: e2, data: t2 }), method: "PATCH" });
var nc = (e2, t2, r2) => () => (o2(String(e2), "Key cannot be empty"), { path: `/webhooks/${e2}`, params: r2 ?? {}, body: JSON.stringify(t2), method: "PATCH" });
var vc = () => () => ({ method: "POST", path: "/utils/cache/clear" });
var Uc = (e2, t2, r2, s2) => () => ({ method: "POST", path: `/utils/export/${e2}`, body: JSON.stringify({ format: t2, query: r2, file: s2 }) });
var $c = (e2, t2, r2) => () => e2 === "GET" ? { path: `/flows/trigger/${t2}`, params: r2 ?? {}, method: "GET" } : { path: `/flows/trigger/${t2}`, body: JSON.stringify(r2 ?? {}), method: "POST" };
var Kc = (e2) => () => ({ method: "POST", path: "/utils/hash/generate", body: JSON.stringify({ string: e2 }) });
var Wc = (e2, t2) => () => ({ method: "POST", path: "/utils/hash/verify", body: JSON.stringify({ string: e2, hash: t2 }) });
var Lc = (e2, t2) => () => ({ path: `/utils/import/${e2}`, method: "POST", body: t2, headers: { "Content-Type": "multipart/form-data" } });
var Vc = (e2, t2) => () => ({ path: `/operations/trigger/${e2}`, body: JSON.stringify(t2 ?? {}), method: "POST" });
var _c = (e2, t2, r2 = "cookie") => () => ({ path: "/shares/auth", method: "POST", body: JSON.stringify({ share: e2, password: t2, mode: r2 }) });
var Bc = (e2, t2) => () => ({ path: "/shares/invite", method: "POST", body: JSON.stringify({ share: e2, emails: t2 }) });
var qc = (e2) => () => ({ path: `/shares/info/${e2}`, method: "GET" });
var Xc = (e2, t2, r2) => () => ({ method: "POST", path: `/utils/sort/${e2}`, body: JSON.stringify({ item: t2, to: r2 }) });
var Zc = (e2, t2, r2) => () => ({ path: "/users/invite", method: "POST", body: JSON.stringify(__spreadValues({ email: e2, role: t2 }, r2 ? { invite_url: r2 } : {})) });
var ep = (e2, t2) => () => ({ path: "/users/invite/accept", method: "POST", body: JSON.stringify({ token: e2, password: t2 }) });
var tp = (e2, t2, r2 = {}) => () => ({ path: "/users/register", method: "POST", body: JSON.stringify(__spreadValues({ email: e2, password: t2 }, r2)) });
var rp = (e2) => () => ({ path: "/register/verify-email", params: { token: e2 }, method: "GET" });
var op = (e2) => () => ({ path: "/users/me/tfa/generate", method: "POST", body: JSON.stringify({ password: e2 }) });
var sp = (e2, t2) => () => ({ path: "/users/me/tfa/enable", method: "POST", body: JSON.stringify({ secret: e2, otp: t2 }) });
var ap = (e2) => () => ({ path: "/users/me/tfa/disable", method: "POST", body: JSON.stringify({ otp: e2 }) });
var np = (e2, t2) => () => (o2(e2, "ID cannot be empty"), { path: `/versions/${e2}/save`, method: "POST", body: JSON.stringify(t2) });
var cp = (e2) => () => (o2(e2, "ID cannot be empty"), { path: `/versions/${e2}/compare`, method: "GET" });
var pp = (e2, t2, r2) => () => (o2(e2, "ID cannot be empty"), { path: `/versions/${e2}/promote`, method: "POST", body: JSON.stringify(r2 ? { mainHash: t2, fields: r2 } : { mainHash: t2 }) });
var q2 = {};
var vp = (e2 = {}) => (t2) => {
  let r2 = __spreadValues(__spreadValues({}, q2), e2);
  return { request(s2) {
    return __async(this, null, function* () {
      let a2 = s2();
      if (a2.headers || (a2.headers = {}), "Content-Type" in a2.headers ? a2.headers["Content-Type"] === "multipart/form-data" && delete a2.headers["Content-Type"] : a2.headers["Content-Type"] = "application/json", "getToken" in this) {
        let y2 = yield this.getToken();
        y2 && (a2.headers || (a2.headers = {}), a2.headers.Authorization = `Bearer ${y2}`);
      }
      let p2 = b2(t2.url, a2.path, a2.params), i = { method: a2.method ?? "GET", headers: a2.headers ?? {} };
      "credentials" in r2 && (i.credentials = r2.credentials), a2.body && (i.body = a2.body), a2.onRequest && (i = yield a2.onRequest(i)), r2.onRequest && (i = yield r2.onRequest(i));
      let c2 = yield D2(p2.toString(), i, t2.globals.fetch);
      return "onResponse" in a2 && (c2 = yield a2.onResponse(c2, i)), "onResponse" in e2 && (c2 = yield e2.onResponse(c2, i)), c2;
    });
  } };
};
function Up(e2, t2) {
  return () => {
    let r2 = e2();
    return typeof t2 == "function" ? r2.onRequest = t2 : r2.onRequest = (s2) => __spreadValues(__spreadValues({}, s2), t2), r2;
  };
}
function kp(e2) {
  return () => {
    let t2 = e2();
    return t2.method === "GET" && t2.params && (t2.method = "SEARCH", t2.body = JSON.stringify({ query: __spreadProps(__spreadValues({}, t2.params), { fields: v2(t2.params.fields ?? []) }) }), delete t2.params), t2;
  };
}
function Wp(e2, t2) {
  return () => {
    let r2 = t2();
    return e2 && (r2.headers || (r2.headers = {}), r2.headers.Authorization = `Bearer ${e2}`), r2;
  };
}
function Lp(e2) {
  return () => e2;
}
export {
  ep as acceptUserInvite,
  Ls as aggregate,
  A as auth,
  _c as authenticateShare,
  ce2 as authentication,
  vc as clearCache,
  cp as compareContentVersion,
  ft as createCollection,
  St as createComment,
  yr as createContentVersion,
  hr as createContentVersions,
  Tt as createDashboard,
  Qt as createDashboards,
  fe as createDirectus,
  gt as createField,
  Pt as createFlow,
  jt as createFlows,
  Ft as createFolder,
  Et as createFolders,
  Nt as createItem,
  vt as createItems,
  $t as createNotification,
  Jt as createNotifications,
  Wt as createOperation,
  Kt as createOperations,
  Ht as createPanel,
  Lt as createPanels,
  _t as createPermission,
  Mt as createPermissions,
  zt as createPreset,
  qt as createPresets,
  Yt as createRelation,
  tr as createRole,
  er as createRoles,
  sr as createShare,
  or as createShares,
  ir as createTranslation,
  mr as createTranslations,
  pr as createUser,
  cr as createUsers,
  lr as createWebhook,
  Sr as createWebhooks,
  Lp as customEndpoint,
  Wr as deleteCollection,
  kr as deleteComment,
  cs as deleteContentVersion,
  ns as deleteContentVersions,
  eo as deleteDashboard,
  Zr as deleteDashboards,
  oo as deleteField,
  io as deleteFile,
  mo as deleteFiles,
  uo as deleteFlow,
  po as deleteFlows,
  lo as deleteFolder,
  So as deleteFolders,
  To as deleteItem,
  Qo as deleteItems,
  bo as deleteNotification,
  Ro as deleteNotifications,
  Po as deleteOperation,
  jo as deleteOperations,
  Ao as deletePanel,
  Fo as deletePanels,
  Uo as deletePermission,
  No as deletePermissions,
  Ko as deletePreset,
  ko as deletePresets,
  Lo as deleteRelation,
  _o as deleteRole,
  Mo as deleteRoles,
  Xo as deleteShare,
  zo as deleteShares,
  ts as deleteTranslation,
  es as deleteTranslations,
  as as deleteUser,
  ss as deleteUsers,
  ys as deleteWebhook,
  hs as deleteWebhooks,
  ap as disableTwoFactor,
  sp as enableTwoFactor,
  v2 as formatFields,
  Kc as generateHash,
  op as generateTwoFactorSecret,
  w2 as generateUid,
  I as getAuthEndpoint,
  Ce as graphql,
  Dt as importFile,
  Bc as inviteShare,
  Zc as inviteUser,
  ze as login,
  Ye as logout,
  $2 as memoryStorage,
  F2 as messageCallback,
  et as passwordRequest,
  rt as passwordReset,
  K as pong,
  pp as promoteContentVersion,
  N2 as queryToParams,
  Js as readActivities,
  $s as readActivity,
  Bs as readAssetArrayBuffer,
  _s as readAssetBlob,
  Ms as readAssetRaw,
  Ys as readCollection,
  Xs as readCollections,
  jm as readContentVersion,
  Om as readContentVersions,
  ra as readDashboard,
  ta as readDashboards,
  sa as readExtensions,
  ca as readField,
  ia as readFields,
  na as readFieldsByCollection,
  ya as readFile,
  ha as readFiles,
  fa as readFlow,
  la as readFlows,
  Ca as readFolder,
  Ta as readFolders,
  li as readGraphqlSdl,
  Da as readItem,
  Ga as readItemPermissions,
  ba as readItems,
  Rm as readMe,
  Ia as readNotification,
  Pa as readNotifications,
  gi as readOpenApiSpec,
  wa as readOperation,
  Aa as readOperations,
  Ja as readPanel,
  Ua as readPanels,
  Wa as readPermission,
  Ka as readPermissions,
  Ma as readPreset,
  Va as readPresets,
  st as readProviders,
  Xa as readRelation,
  za as readRelationByCollection,
  qa as readRelations,
  tm as readRevision,
  em as readRevisions,
  am as readRole,
  sm as readRoles,
  im as readSettings,
  um as readShare,
  qc as readShareInfo,
  pm as readShares,
  dm as readSingleton,
  xm as readTranslation,
  fm as readTranslations,
  gm as readUser,
  Cm as readUsers,
  Fm as readWebhook,
  Em as readWebhooks,
  Ue as realtime,
  mt as refresh,
  tp as registerUser,
  rp as registerUserVerify,
  vp as rest,
  np as saveToContentVersion,
  mi as schemaApply,
  ni as schemaDiff,
  pi as schemaSnapshot,
  xi2 as serverHealth,
  Ti as serverInfo,
  bi as serverPing,
  $e as sleep,
  ue as staticToken,
  Q as throwIfCoreCollection,
  o2 as throwIfEmpty,
  $c as triggerFlow,
  Vc as triggerOperation,
  Ui as updateCollection,
  wi as updateComment,
  sc as updateContentVersion,
  oc as updateContentVersions,
  Ki as updateDashboard,
  ki as updateDashboards,
  Li as updateExtension,
  Mi as updateField,
  zi as updateFile,
  qi as updateFiles,
  en as updateFlow,
  Zi as updateFlows,
  sn as updateFolder,
  on as updateFolders,
  cn as updateItem,
  nn as updateItems,
  ec as updateMe,
  yn as updateNotification,
  hn as updateNotifications,
  fn as updateOperation,
  ln as updateOperations,
  Cn as updatePanel,
  Tn as updatePanels,
  Dn as updatePermission,
  bn as updatePermissions,
  In as updatePreset,
  Pn as updatePresets,
  An as updateRelation,
  Un as updateRole,
  Nn as updateRoles,
  $n as updateSettings,
  Gn as updateShare,
  Wn as updateShares,
  Vn as updateSingleton,
  qn as updateTranslation,
  Bn as updateTranslations,
  Zn as updateUser,
  Yn as updateUsers,
  nc as updateWebhook,
  ic as updateWebhooks,
  bt as uploadFiles,
  Xc as utilitySort,
  Uc as utilsExport,
  Lc as utilsImport,
  Wc as verifyHash,
  Up as withOptions,
  kp as withSearch,
  Wp as withToken
};
//# sourceMappingURL=@directus_sdk.js.map
