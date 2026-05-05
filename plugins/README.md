# VSTVault Plugins Folder

This folder contains all VST plugins available on VSTVault.

## Structure

Each plugin lives in its own subfolder:

```
plugins/
  PluginName/
    plugin.dll     ← The actual VST plugin file
    README.txt     ← Optional plugin info
```

## Adding a New Plugin

1. Create a new folder with the plugin name: `plugins/MyPluginName/`
2. Place the plugin file inside: `plugins/MyPluginName/plugin.dll`
3. Add the plugin name to `client/src/lib/plugins.ts` in the `PLUGIN_NAMES` array
4. The website will automatically generate all metadata (version, size, description, etc.) from the name

## Notes

- Plugin names are used as the source of truth for all generated data
- Data is deterministic — the same name always generates the same metadata
- The `plugin.dll` file is served directly as the download link
- Supported formats: VST3, VST2, AU, AAX (listed per plugin)
