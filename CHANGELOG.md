# Changelog

## v0.5

- **New Loader UI**: A clean graphical interface that replaces system notification spam with a dedicated log window for important status updates. In the event of an error, the UI automatically hides to reveal the full "old style" debug logs.
- **Payload Manager (New Default ELF)**: It handles payload loading after the YouTube app is closed, improving the stability of payloads like **etaHEN** and **kstuff**.
    - **Note on Compatibility**: Your existing autoload configurations will continue to work as they did before.
    - **Note on Usage**: If you choose to use Payload Manager, it should be the **only** item listed in your `autoload.txt`.
- **Custom ELF Loader**: The default `elfldr` now only accepts connections from the PS5 itself (localhost). This improves security by preventing other devices on your network from sending payloads to your console.
    - **Note**: You can still use a standard `elfldr` if you need to send payloads from other devices. See the **Additional Info** section in [README.md](README.md) for instructions.

[Full Changelog](https://github.com/itsPLK/ps5_y2jb_autoloader/compare/v0.4...v0.5)


## v0.4

Note: By default, Y2JB Autoloader does not utilize the new kill_youtube.elf from the upstream Y2JB project.
If you experience stability issues with the current auto-close method, you can manually add kill_youtube.elf as the final entry in your autoload configuration.

[Full Changelog](https://github.com/itsPLK/ps5_y2jb_autoloader/compare/v0.3...v0.4)


## v0.3

[Full Changelog](https://github.com/itsPLK/ps5_y2jb_autoloader/compare/v0.2.2...v0.3)


## v0.2.2

[Full Changelog](https://github.com/itsPLK/ps5_y2jb_autoloader/compare/v0.2.1...v0.2.2)


## v0.2.1

- splash.html included in download0.dat now has read-only permissions
- updater will now fix splash.html permissions too

[Full Changelog](https://github.com/itsPLK/ps5_y2jb_autoloader/compare/v0.2...v0.2.1)


## v0.2

This version adds y2jb_updater.
To install future releases, simply put the y2jb_update.zip file on your USB drive.

Updated elfldr.elf to v0.21

[Full Changelog](https://github.com/itsPLK/ps5_y2jb_autoloader/compare/v0.1...v0.2)


## v0.1

- Initial release