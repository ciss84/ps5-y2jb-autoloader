// Credit: @hammer-83, ps5-payload-dev SDK, PS5_KernelOffset.java
// Offsets verified via offsets.lua

const offset_4_00_to_4_51 = {
    DATA_BASE: 0x0C00000n,
    DATA_SIZE: 0x087B1930n,
    DATA_BASE_DYNAMIC: 0x00010000n,
    DATA_BASE_TO_DYNAMIC: 0x0670DB90n,
    DATA_BASE_ALLPROC: 0x027EDCB8n,
    DATA_BASE_SECURITY_FLAGS: 0x06506474n,
    DATA_BASE_ROOTVNODE: 0x066E74C0n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x03257A78n,
    DATA_BASE_DATA_CAVE: 0x06C01000n,
    DATA_BASE_GVMSPACE: 0x064C3F80n,
    PMAP_STORE_PML4PML4I: -0x1Cn,
    PMAP_STORE_DMPML4I: 0x288n,
    PMAP_STORE_DMPDPI: 0x28Cn,
};

const offset_5_00_to_5_10 = {
    DATA_BASE: 0x0C40000n,
    DATA_SIZE: 0x08921930n,
    DATA_BASE_DYNAMIC: 0x00010000n,
    DATA_BASE_TO_DYNAMIC: 0x06879C00n,
    DATA_BASE_ALLPROC: 0x0291DD00n,
    DATA_BASE_SECURITY_FLAGS: 0x066466ECn,
    DATA_BASE_ROOTVNODE: 0x06853510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x03398A88n,
    DATA_BASE_DATA_CAVE: 0x06320000n,
    DATA_BASE_GVMSPACE: 0x06603FB0n,
    PMAP_STORE_PML4PML4I: -0x105Cn,
    PMAP_STORE_DMPML4I: 0x29Cn,
    PMAP_STORE_DMPDPI: 0x2A0n,
};

const offset_5_50 = {
    DATA_BASE: 0x0C40000n,
    DATA_SIZE: 0x08921930n,
    DATA_BASE_DYNAMIC: 0x00010000n,
    DATA_BASE_TO_DYNAMIC: 0x06879C00n,
    DATA_BASE_ALLPROC: 0x0291DD00n,
    DATA_BASE_SECURITY_FLAGS: 0x066466ECn,
    DATA_BASE_ROOTVNODE: 0x06853510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x03394A88n,
    DATA_BASE_DATA_CAVE: 0x06320000n,
    DATA_BASE_GVMSPACE: 0x06603FB0n,
    PMAP_STORE_PML4PML4I: -0x105Cn,
    PMAP_STORE_DMPML4I: 0x29Cn,
    PMAP_STORE_DMPDPI: 0x2A0n,
};

const offset_6_00_to_6_50 = {
    DATA_BASE: 0x0C60000n,
    DATA_SIZE: 0x08861930n,
    DATA_BASE_DYNAMIC: 0x00010000n,
    DATA_BASE_TO_DYNAMIC: 0x067C5C10n,
    DATA_BASE_ALLPROC: 0x02869D20n,
    DATA_BASE_SECURITY_FLAGS: 0x065968ECn,
    DATA_BASE_ROOTVNODE: 0x0679F510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x032E4358n,
    DATA_BASE_DATA_CAVE: 0x06270000n,
    DATA_BASE_GVMSPACE: 0x065540F0n,
    PMAP_STORE_PML4PML4I: -0x105Cn,
    PMAP_STORE_DMPML4I: 0x29Cn,
    PMAP_STORE_DMPDPI: 0x2A0n,
};

const offset_7_00_to_7_61 = {
    DATA_BASE: 0x0C50000n,
    DATA_SIZE: 0x05191930n,
    DATA_BASE_DYNAMIC: 0x00010000n,
    DATA_BASE_TO_DYNAMIC: 0x030EDC40n,
    DATA_BASE_ALLPROC: 0x02859D50n,
    DATA_BASE_SECURITY_FLAGS: 0x00AC8064n,
    DATA_BASE_ROOTVNODE: 0x030C7510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x02E2C848n,
    DATA_BASE_DATA_CAVE: 0x050A1000n,
    DATA_BASE_GVMSPACE: 0x02E76090n,
    PMAP_STORE_PML4PML4I: -0x10ACn,
    PMAP_STORE_DMPML4I: 0x29Cn,
    PMAP_STORE_DMPDPI: 0x2A0n,
};

const offset_8_00_to_8_60 = {
    DATA_BASE: 0xC70000n,
    DATA_SIZE: null,
    DATA_BASE_DYNAMIC: 0x10000n,
    DATA_BASE_TO_DYNAMIC: null,
    DATA_BASE_ALLPROC: 0x2875D50n,
    DATA_BASE_SECURITY_FLAGS: 0xAC3064n,
    DATA_BASE_ROOTVNODE: 0x30FB510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x2E48848n,
    DATA_BASE_DATA_CAVE: null,
    DATA_BASE_GVMSPACE: 0x2EAA090n,
    PMAP_STORE_PML4PML4I: null,
    PMAP_STORE_DMPML4I: null,
    PMAP_STORE_DMPDPI: null,
};

const offset_9_00 = {
    DATA_BASE: 0xCA0000n,
    DATA_SIZE: null,
    DATA_BASE_DYNAMIC: 0x10000n,
    DATA_BASE_TO_DYNAMIC: null,
    DATA_BASE_ALLPROC: 0x2755D50n,
    DATA_BASE_SECURITY_FLAGS: 0xD72064n,
    DATA_BASE_ROOTVNODE: 0x2FDB510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x2D28B78n,
    DATA_BASE_DATA_CAVE: null,
    DATA_BASE_GVMSPACE: 0x2D8A570n,
    PMAP_STORE_PML4PML4I: null,
    PMAP_STORE_DMPML4I: null,
    PMAP_STORE_DMPDPI: null,
};

const offset_9_05_to_9_60 = {
    DATA_BASE: 0xCA0000n,
    DATA_SIZE: null,
    DATA_BASE_DYNAMIC: 0x10000n,
    DATA_BASE_TO_DYNAMIC: null,
    DATA_BASE_ALLPROC: 0x2755D50n,
    DATA_BASE_SECURITY_FLAGS: 0xD73064n,
    DATA_BASE_ROOTVNODE: 0x2FDB510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x2D28B78n,
    DATA_BASE_DATA_CAVE: null,
    DATA_BASE_GVMSPACE: 0x2D8A570n,
    PMAP_STORE_PML4PML4I: null,
    PMAP_STORE_DMPML4I: null,
    PMAP_STORE_DMPDPI: null,
};

const offset_10_xx = {
    DATA_BASE: 0xCC0000n,
    DATA_SIZE: null,
    DATA_BASE_DYNAMIC: 0x10000n,
    DATA_BASE_TO_DYNAMIC: null,
    DATA_BASE_ALLPROC: 0x2765D70n,
    DATA_BASE_SECURITY_FLAGS: 0xD79064n,
    DATA_BASE_ROOTVNODE: 0x2FA3510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x2CF0EF8n,
    DATA_BASE_DATA_CAVE: null,
    DATA_BASE_GVMSPACE: 0x2D52570n,
    PMAP_STORE_PML4PML4I: null,
    PMAP_STORE_DMPML4I: null,
    PMAP_STORE_DMPDPI: null,
};

const offset_11_xx = {
    DATA_BASE: 0xCC0000n,
    DATA_SIZE: null,
    DATA_BASE_DYNAMIC: 0x10000n,
    DATA_BASE_TO_DYNAMIC: null,
    DATA_BASE_ALLPROC: 0x2875D70n,
    DATA_BASE_SECURITY_FLAGS: 0xD8C064n,
    DATA_BASE_ROOTVNODE: 0x30B7510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x2E04F18n,
    DATA_BASE_DATA_CAVE: null,
    DATA_BASE_GVMSPACE: 0x2E66570n,
    PMAP_STORE_PML4PML4I: null,
    PMAP_STORE_DMPML4I: null,
    PMAP_STORE_DMPDPI: null,
};
       
const offset_12_xx = {
    DATA_BASE: 0xCC0000n,
    DATA_SIZE: null,
    DATA_BASE_DYNAMIC: 0x10000n,
    DATA_BASE_TO_DYNAMIC: null,
    DATA_BASE_ALLPROC: 0x2885E00n,
    DATA_BASE_SECURITY_FLAGS: 0xD83064n,
    DATA_BASE_ROOTVNODE: 0x30D7510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x2E1CFB8n,
    DATA_BASE_DATA_CAVE: null,
    DATA_BASE_GVMSPACE: 0x2E7E570n,
    PMAP_STORE_PML4PML4I: null,
    PMAP_STORE_DMPML4I: null,
    PMAP_STORE_DMPDPI: null,
};

const offset_13_xx = {
    DATA_BASE: 0xCC0000n,
    DATA_SIZE: null,
    DATA_BASE_DYNAMIC: 0x10000n,
    DATA_BASE_TO_DYNAMIC: null,
    DATA_BASE_ALLPROC: 0x28C5E00n,
    DATA_BASE_SECURITY_FLAGS: 0xD99064n,
    DATA_BASE_ROOTVNODE: 0x3133510n,
    DATA_BASE_KERNEL_PMAP_STORE: 0x2E74FF8n,
    DATA_BASE_DATA_CAVE: null,
    DATA_BASE_GVMSPACE: 0x2ED6570n,
    PMAP_STORE_PML4PML4I: null,
    PMAP_STORE_DMPML4I: null,
    PMAP_STORE_DMPDPI: null,
};

const ps5_kernel_offset_list = {
    "4.00": offset_4_00_to_4_51,
    "4.02": offset_4_00_to_4_51,
    "4.03": offset_4_00_to_4_51,
    "4.50": offset_4_00_to_4_51,
    "4.51": offset_4_00_to_4_51,
    "5.00": offset_5_00_to_5_10,
    "5.02": offset_5_00_to_5_10,
    "5.10": offset_5_00_to_5_10,
    "5.50": offset_5_50,
    "6.00": offset_6_00_to_6_50,
    "6.02": offset_6_00_to_6_50,
    "6.50": offset_6_00_to_6_50,
    "7.00": offset_7_00_to_7_61,
    "7.01": offset_7_00_to_7_61,
    "7.20": offset_7_00_to_7_61,
    "7.40": offset_7_00_to_7_61,
    "7.60": offset_7_00_to_7_61,
    "7.61": offset_7_00_to_7_61,
    "8.00": offset_8_00_to_8_60,
    "8.20": offset_8_00_to_8_60,
    "8.40": offset_8_00_to_8_60,
    "8.60": offset_8_00_to_8_60,
    "9.00": offset_9_00,
    "9.05": offset_9_05_to_9_60,
    "9.20": offset_9_05_to_9_60,
    "9.40": offset_9_05_to_9_60,
    "9.60": offset_9_05_to_9_60,
    "10.00": offset_10_xx,
    "10.01": offset_10_xx,
    "10.20": offset_10_xx,
    "10.40": offset_10_xx,
    "10.50": offset_10_xx,
    "10.60": offset_10_xx,
    "11.00": offset_11_xx,
    "11.02": offset_11_xx,
    "11.50": offset_11_xx,
    "12.00": offset_12_xx,
    "12.20": offset_12_xx,
    "12.40": offset_12_xx,
};

let kernel_offset = null;

function get_kernel_offset() {
    
    const offsets = ps5_kernel_offset_list[FW_VERSION];
    
    if (!offsets) {
        throw new Error("Unsupported firmware version: " + FW_VERSION);
    }
    
    kernel_offset = { ...offsets };
    
    kernel_offset.DATA_BASE_TARGET_ID    = kernel_offset.DATA_BASE_SECURITY_FLAGS + 0x09n;
    kernel_offset.DATA_BASE_QA_FLAGS     = kernel_offset.DATA_BASE_SECURITY_FLAGS + 0x24n;
    kernel_offset.DATA_BASE_UTOKEN_FLAGS = kernel_offset.DATA_BASE_SECURITY_FLAGS + 0x8Cn;
    
    // proc
    kernel_offset.PROC_FD       = 0x48n;
    kernel_offset.PROC_PID      = 0xBCn;
    kernel_offset.PROC_VM_SPACE = 0x200n;
    kernel_offset.PROC_UCRED    = 0x40n;
    kernel_offset.PROC_COMM     = -1n;
    kernel_offset.PROC_SYSENT   = -1n;
    
    // filedesc
    kernel_offset.FILEDESC_OFILES = 0x8n;
    kernel_offset.SIZEOF_OFILES   = 0x30n;
    kernel_offset.FD_RDIR         = 0x10n;
    kernel_offset.FD_JDIR         = 0x18n;
    
    // ucred
    kernel_offset.UCRED_CR_UID       = 0x04n;
    kernel_offset.UCRED_CR_RUID      = 0x08n;
    kernel_offset.UCRED_CR_SVUID     = 0x0Cn;
    kernel_offset.UCRED_CR_NGROUPS   = 0x10n;
    kernel_offset.UCRED_CR_RGID      = 0x14n;
    kernel_offset.UCRED_CR_PRISON    = 0x30n;
    kernel_offset.UCRED_CR_SCEAUTHID = 0x58n;
    kernel_offset.UCRED_CR_SCECAPS0  = 0x60n;
    kernel_offset.UCRED_CR_SCECAPS1  = 0x68n;
    kernel_offset.UCRED_CR_SCEATTRS  = 0x83n;
    
    // vmspace
    kernel_offset.VMSPACE_VM_PMAP = -1n;
    kernel_offset.VMSPACE_VM_VMID = -1n;
    kernel_offset.PMAP_CR3        = 0x28n;
    
    // gpu vmspace
    kernel_offset.SIZEOF_GVMSPACE     = 0x100n;
    kernel_offset.GVMSPACE_START_VA   = 0x8n;
    kernel_offset.GVMSPACE_SIZE       = 0x10n;
    kernel_offset.GVMSPACE_PAGE_DIR_VA = 0x38n;
    
    // net
    kernel_offset.SO_PCB        = 0x18n;
    kernel_offset.INPCB_PKTOPTS = 0x120n;
    kernel_offset.IP6PO_RTHDR   = 0x70n;
    
    return kernel_offset;
}

function find_vmspace_pmap_offset() {
    const vmspace = kernel.read_qword(kernel.addr.curproc + kernel_offset.PROC_VM_SPACE);
    const cur_scan_offset = 0x1C8n;
    for (let i = 1; i <= 6; i++) {
        const scan_val = kernel.read_qword(vmspace + cur_scan_offset + BigInt(i * 8));
        const offset_diff = Number(scan_val - vmspace);
        if (offset_diff >= 0x2C0 && offset_diff <= 0x2F0) {
            return cur_scan_offset + BigInt(i * 8);
        }
    }
    throw new Error("failed to find VMSPACE_VM_PMAP offset");
}

function find_vmspace_vmid_offset() {
    const vmspace = kernel.read_qword(kernel.addr.curproc + kernel_offset.PROC_VM_SPACE);
    const cur_scan_offset = 0x1D4n;
    for (let i = 1; i <= 8; i++) {
        const scan_offset = cur_scan_offset + BigInt(i * 4);
        const scan_val = Number(kernel.read_dword(vmspace + scan_offset));
        if (scan_val > 0 && scan_val <= 0x10) {
            return scan_offset;
        }
    }
    throw new Error("failed to find VMSPACE_VM_VMID offset");
}

function find_proc_offsets() {
    const proc_data = kernel.read_buffer(kernel.addr.curproc, 0x1000);
    const p_comm_sign   = find_pattern(proc_data, "ce fa ef be cc bb");
    const p_sysent_sign = find_pattern(proc_data, "ff ff ff ff ff ff ff 7f");
    if (p_comm_sign.length === 0)   throw new Error("failed to find offset for PROC_COMM");
    if (p_sysent_sign.length === 0) throw new Error("failed to find offset for PROC_SYSENT");
    return {
        PROC_COMM:   BigInt(p_comm_sign[0]   + 0x8),
        PROC_SYSENT: BigInt(p_sysent_sign[0] - 0x10),
    };
}

function find_additional_offsets() {
    const proc_offsets       = find_proc_offsets();
    const vm_map_pmap_offset = find_vmspace_pmap_offset();
    const vm_map_vmid_offset = find_vmspace_vmid_offset();
    return {
        PROC_COMM:        proc_offsets.PROC_COMM,
        PROC_SYSENT:      proc_offsets.PROC_SYSENT,
        VMSPACE_VM_PMAP:  vm_map_pmap_offset,
        VMSPACE_VM_VMID:  vm_map_vmid_offset,
    };
}

function update_kernel_offsets() {
    const offsets = find_additional_offsets();
    for (const [key, value] of Object.entries(offsets)) {
        kernel_offset[key] = value;
    }
}
