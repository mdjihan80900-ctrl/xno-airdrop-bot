let balance = 0;

function claimXNO() {
    balance = 10000;
    document.getElementById('balance').innerText = balance.toLocaleString();
    document.getElementById('claimBtn').classList.add('hidden');
}

function showPage(page) {
    if (page === 'wallet') {
        showPopup("Airdrop শেষ হওয়ার পরেই আপনি আপনার মূল্যবান টোকেন উত্তোলন করতে পারবেন।");
    } else if (page === 'task') {
        showPopup("নতুন টাস্ক শীঘ্রই আসছে! ৫০০০ XNO বোনাস পেতে সাথে থাকুন।");
    } else if (page === 'refer') {
        showPopup("প্রতি রেফারে পাবেন ৩০ XNO। রেফারেল সিস্টেম আপডেট হচ্ছে।");
    }
}

function showPopup(text) {
    document.getElementById('popup-text').innerText = text;
    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

// Simple Timer Logic
let time = (16 * 24 * 60 * 60) + (23 * 60 * 60);
setInterval(() => {
    time--;
    let d = Math.floor(time / (24 * 3600));
    let h = Math.floor((time % (24 * 3600)) / 3600);
    let m = Math.floor((time % 3600) / 60);
    let s = time % 60;
    document.getElementById('countdown').innerText = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);
