const titles = [
    "Kernel Panic: Unrecoverable Error 0x" + Math.random().toString(16).slice(2, 10).toUpperCase(),
    "Segmentation Fault in Process ID " + Math.floor(Math.random() * 10000),
    "Database Corruption in Table 0x" + Math.random().toString(16).slice(2, 6).toUpperCase(),
    "SSL Handshake Failed: Certificate Expired",
    "Memory Leak Detected in Thread 0x" + Math.random().toString(16).slice(2, 6).toUpperCase(),
    "Stack Overflow: Call Stack Exceeded " + Math.floor(Math.random() * 1000) + " Frames",
    "Hard Drive Failure: S.M.A.R.T. Status Critical",
    "Network Packet Loss: " + Math.floor(Math.random() * 100) + "%",
    "Unauthorized Access from IP 192.168." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
    "DNS Resolution Failed: " + ["example.com", "api.service.net", "internal.host"][Math.floor(Math.random() * 3)],
    "RAID Array Degraded: Disk " + Math.floor(Math.random() * 6) + " Offline",
    "BIOS Checksum Error: CMOS Reset Required",
    "VM Resource Exhaustion: " + Math.floor(Math.random() * 90) + "% CPU Usage",
    "File System Corruption: Inode 0x" + Math.random().toString(16).slice(2, 6).toUpperCase(),
    "TCP/IP Stack Overload: Connection Reset",
    "GPU Driver Crash: TDR Event Detected",
    "Power Supply Failure: Voltage Drop Detected",
    "Container Crash: Pod " + Math.random().toString(16).slice(2, 6).toUpperCase() + " Terminated",
    "Firewall Rule Conflict: Port " + Math.floor(Math.random() * 65535) + " Blocked",
    "API Rate Limit Exceeded: 429 Too Many Requests",
    "Database Deadlock: Transaction Rollback",
    "Invalid Pointer Dereference in Module " + ["kernel32.dll", "ntoskrnl.exe", "libc.so.6"][Math.floor(Math.random() * 3)],
    "Hypervisor Error: VM Snapshot Corrupted",
    "Hash Mismatch: File Integrity Compromised",
    "IRQ Conflict: IRQ " + Math.floor(Math.random() * 16) + " Busy"
];

// Funktion, um eine zufällige Fehlermeldung auszuwählen
function getRandomTitle() {
    return titles[Math.floor(Math.random() * titles.length)];
}

// Konsole mit zufälligen Fehlermeldungen spammen
setInterval(() => {
    console.log(getRandomTitle());
    title = getRandomTitle();
}, 500); // Alle 500 Millisekunden (0,5 Sekunden)



