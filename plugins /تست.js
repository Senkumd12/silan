let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `⎔⋅• ━ ╼╃ ⌬〔✎﷽〕⌬ ╄╾ ━ •⋅⎔
>SENKU↳🐢↲𝐁𝐎𝐓
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
> 〔*test script SENKU-MD* ┊ ˼‏ 🧑‍💻˹ 〕
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
           *سيــ🐢نــكــو  بــ🤖ــوت*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*✎السكريبت والبوت شغلان✎*🥺
*the first code* 👉 *the first script*👌😝
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞⚜️┊SENKU ス  ┊⚜️⌝*
*✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏ `

    conn.sendFile(m.chat, 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(تست)$/i;
handler.command = new RegExp;

export default handler;
