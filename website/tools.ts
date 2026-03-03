/*
 * This file is part of the xPack project (http://xpack.github.io).
 * Copyright (c) 2024-2026 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/licenses/mit.
 */

const tools = {
    mainTools: [
        {
            descriptiveName: 'GNU AArch64 Embedded GCC',
            permalinkName: 'aarch64-none-elf-gcc',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'GNU Arm Embedded GCC',
            permalinkName: 'arm-none-eabi-gcc',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'LLVM clang',
            permalinkName: 'clang',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'CMake',
            permalinkName: 'cmake',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'GCC',
            permalinkName: 'gcc',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'Meson Build',
            permalinkName: 'meson-build',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'MinGW-w64 GCC',
            permalinkName: 'mingw-w64-gcc',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'Ninja Build',
            permalinkName: 'ninja-build',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'OpenOCD',
            permalinkName: 'openocd',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'QEMU Arm',
            permalinkName: 'qemu-arm',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'QEMU RISC-V',
            permalinkName: 'qemu-riscv',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'GNU RISC-V Embedded GCC',
            permalinkName: 'riscv-none-elf-gcc',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'Windows Build Tools',
            permalinkName: 'windows-build-tools',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
    ],

    /* When updated, don't forget to add sitemap to robots.txt! */
    supplementaryTools: [
        {
            descriptiveName: 'GNU bison',
            permalinkName: 'bison',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'flex',
            permalinkName: 'flex',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'GNU m4',
            permalinkName: 'm4',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'NixOS PatchELF',
            permalinkName: 'patchelf',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'pkg-config',
            permalinkName: 'pkg-config',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'GNU realpath',
            permalinkName: 'realpath',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'GNU sed',
            permalinkName: 'sed',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'WineHQ',
            permalinkName: 'wine',
            isWindows: false,
            isMacOS: false,
            isLinux: true,
        },
    ],

    workInProgressTools: [
        {
            descriptiveName: 'GNU Bash',
            permalinkName: 'bash',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            descriptiveName: 'GNU texinfo',
            permalinkName: 'texinfo',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
    ]
}

export default tools;
