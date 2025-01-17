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
            shortName: 'aarch64-none-elf-gcc'
        },
        {
            longName: 'GNU Arm Embedded GCC',
            shortName: 'arm-none-eabi-gcc'
        },
        {
            longName: 'LLVM clang',
            shortName: 'clang'
        },
        {
            longName: 'CMake',
            shortName: 'cmake'
        },
        {
            longName: 'GCC',
            shortName: 'gcc'
        },
        {
            longName: 'Meson Build',
            shortName: 'meson-build'
        },
        {
            longName: 'MinGW-w64 GCC',
            shortName: 'mingw-w64-gcc'
        },
        {
            longName: 'Ninja Build',
            shortName: 'ninja-build'
        },
        {
            longName: 'OpenOCD',
            shortName: 'openocd'
        },
        {
            longName: 'QEMU Arm',
            shortName: 'qemu-arm'
        },
        {
            longName: 'QEMU RISC-V',
            shortName: 'qemu-riscv'
        },
        {
            longName: 'GNU RISC-V Embedded GCC',
            shortName: 'riscv-none-elf-gcc'
        },
        {
            longName: 'Windows Build Tools',
            shortName: 'windows-build-tools'
        },
    ],

    /* When updated, don't forget to add sitemap to robots.txt! */
    supplementaryTools: [
        {
            longName: 'GNU bison',
            shortName: 'bison'
        },
        {
            longName: 'flex',
            shortName: 'flex'
        },
        {
            longName: 'GNU m4',
            shortName: 'm4'
        },
        {
            longName: 'NixOS PatchELF',
            shortName: 'patchelf'
        },
        {
            longName: 'pkg-config',
            shortName: 'pkg-config'
        },
        {
            longName: 'GNU realpath',
            shortName: 'realpath'
        },
        {
            longName: 'GNU sed',
            shortName: 'sed'
        },
        {
            longName: 'WineHQ',
            shortName: 'wine'
        },
    ],

    workInProgressTools: [
        {
            longName: 'GNU Bash',
            shortName: 'bash'
        },
        {
            longName: 'GNU texinfo',
            shortName: 'texinfo'
        },
    ]
}

export default tools;
