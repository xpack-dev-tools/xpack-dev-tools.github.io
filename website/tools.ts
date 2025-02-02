/*
 * This file is part of the xPack project (http://xpack.github.io).
 * Copyright (c) 2024 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/licenses/MIT/.
 */

const tools = {
    mainTools: [
        {
            longName: 'GNU AArch64 Embedded GCC',
            shortName: 'aarch64-none-elf-gcc',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'GNU Arm Embedded GCC',
            shortName: 'arm-none-eabi-gcc',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'LLVM clang',
            shortName: 'clang',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'CMake',
            shortName: 'cmake',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'GCC',
            shortName: 'gcc',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'Meson Build',
            shortName: 'meson-build',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'MinGW-w64 GCC',
            shortName: 'mingw-w64-gcc',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'Ninja Build',
            shortName: 'ninja-build',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'OpenOCD',
            shortName: 'openocd',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'QEMU Arm',
            shortName: 'qemu-arm',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'QEMU RISC-V',
            shortName: 'qemu-riscv',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'GNU RISC-V Embedded GCC',
            shortName: 'riscv-none-elf-gcc',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'Windows Build Tools',
            shortName: 'windows-build-tools',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
    ],

    /* When updated, don't forget to add sitemap to robots.txt! */
    supplementaryTools: [
        {
            longName: 'GNU bison',
            shortName: 'bison',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'flex',
            shortName: 'flex',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'GNU m4',
            shortName: 'm4',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'NixOS PatchELF',
            shortName: 'patchelf',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'pkg-config',
            shortName: 'pkg-config',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'GNU realpath',
            shortName: 'realpath',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'GNU sed',
            shortName: 'sed',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'WineHQ',
            shortName: 'wine',
            isWindows: false,
            isMacOS: false,
            isLinux: true,
        },
    ],

    workInProgressTools: [
        {
            longName: 'GNU Bash',
            shortName: 'bash',
            isWindows: true,
            isMacOS: true,
            isLinux: true,
        },
        {
            longName: 'GNU texinfo',
            shortName: 'texinfo',
            isWindows: false,
            isMacOS: true,
            isLinux: true,
        },
    ]
}

export default tools;
