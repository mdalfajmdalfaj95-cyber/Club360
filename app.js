
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => "৳" + Number(n).toLocaleString("en-US");
const initials = n => n.split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase();

const db = {
  members:[
    {id:"CLB-0045",name:"Nafiz Sarkar",phone:"01711-223344",area:"Mirpur",blood:"B+",profession:"Developer",join:"2025-02-12",status:"Active",fee:0},
    {id:"CLB-0046",name:"Rahim Uddin",phone:"01822-334455",area:"Uttara",blood:"O+",profession:"Business",join:"2024-06-08",status:"Active",fee:400},
    {id:"CLB-0047",name:"Karim Hasan",phone:"01933-445566",area:"Mohammadpur",blood:"A+",profession:"Teacher",join:"2025-08-19",status:"Active",fee:200},
    {id:"CLB-0048",name:"Sadia Akter",phone:"01644-556677",area:"Dhanmondi",blood:"AB+",profession:"Student",join:"2026-01-10",status:"Active",fee:0},
    {id:"CLB-0049",name:"Tanvir Ahmed",phone:"01555-667788",area:"Banani",blood:"O-",profession:"Engineer",join:"2023-11-01",status:"Inactive",fee:600},
    {id:"CLB-0050",name:"Mim Rahman",phone:"01366-778899",area:"Badda",blood:"B+",profession:"Designer",join:"2026-03-14",status:"Pending",fee:200}
  ],
  committee:[
    {role:"President",name:"Md. Anwar Hossain",phone:"01700-111222"},
    {role:"Vice President",name:"Faruk Ahmed",phone:"01800-222333"},
    {role:"General Secretary",name:"Sabbir Khan",phone:"01900-333444"},
    {role:"Joint Secretary",name:"Nusrat Jahan",phone:"01600-444555"},
    {role:"Treasurer",name:"Mahmudul Hasan",phone:"01500-555666"},
    {role:"Sports Secretary",name:"Rafiq Islam",phone:"01300-666777"}
  ],
  transactions:[
    {date:"2026-10-01",type:"Income",category:"Membership Fee",desc:"October collection",amount:25500,by:"Treasurer"},
    {date:"2026-10-02",type:"Expense",category:"Electricity",desc:"Club electricity bill",amount:2500,by:"Treasurer"},
    {date:"2026-10-03",type:"Income",category:"Donation",desc:"Charity donation",amount:10000,by:"Secretary"},
    {date:"2026-10-04",type:"Expense",category:"Sports",desc:"Football equipment",amount:4500,by:"Sports Secretary"},
    {date:"2026-10-05",type:"Income",category:"Sponsorship",desc:"Tournament sponsor",amount:50000,by:"President"},
    {date:"2026-10-06",type:"Expense",category:"Refreshment",desc:"Committee meeting",amount:1800,by:"Secretary"}
  ],
  payments:[
    {receipt:"RC-2026-00892",member:"Nafiz Sarkar",purpose:"Monthly Membership Fee",amount:200,method:"bKash",date:"2026-10-05",status:"Paid"},
    {receipt:"RC-2026-00891",member:"Rahim Uddin",purpose:"Monthly Membership Fee",amount:200,method:"Cash",date:"2026-10-04",status:"Paid"},
    {receipt:"RC-2026-00890",member:"Karim Hasan",purpose:"Monthly Membership Fee",amount:200,method:"Bank",date:"2026-10-03",status:"Paid"},
    {receipt:"RC-2026-00889",member:"Mim Rahman",purpose:"Admission Fee",amount:500,method:"Cash",date:"2026-10-02",status:"Pending"}
  ],
  events:[
    {id:"EV-101",title:"Annual Football Tournament",date:"2026-10-12",time:"04:00 PM",location:"Club Ground",registered:84,confirmed:72,status:"Open"},
    {id:"EV-102",title:"Monthly General Meeting",date:"2026-10-15",time:"08:00 PM",location:"Club Hall",registered:120,confirmed:115,status:"Open"},
    {id:"EV-103",title:"Blood Donation Camp",date:"2026-10-18",time:"10:00 AM",location:"Club Hall",registered:48,confirmed:42,status:"Open"},
    {id:"EV-104",title:"Family Picnic 2026",date:"2026-11-02",time:"07:00 AM",location:"Savar",registered:96,confirmed:88,status:"Open"}
  ],
  attendance:[
    {date:"2026-10-05",event:"Football Practice",present:78,total:102},
    {date:"2026-10-04",event:"Committee Meeting",present:12,total:12},
    {date:"2026-10-02",event:"Volunteer Training",present:65,total:90}
  ],
  donors:[
    {name:"Nafiz Sarkar",blood:"B+",phone:"01711-223344",area:"Mirpur",last:"2026-08-12",available:true},
    {name:"Rahim Uddin",blood:"O+",phone:"01822-334455",area:"Uttara",last:"2026-09-20",available:true},
    {name:"Sadia Akter",blood:"AB+",phone:"01644-556677",area:"Dhanmondi",last:"2026-05-14",available:false},
    {name:"Tanvir Ahmed",blood:"O-",phone:"01555-667788",area:"Banani",last:"2026-07-02",available:true},
    {name:"Mim Rahman",blood:"B+",phone:"01366-778899",area:"Badda",last:"2026-09-11",available:true}
  ],
  emergencies:[
    {id:"ER-21",type:"Blood Request",patient:"Rahman Ali",blood:"O+",hospital:"DMCH",bags:2,contact:"01700-888999",status:"Active"},
    {id:"ER-20",type:"Medical Help",patient:"Ayesha Begum",blood:"A+",hospital:"Square Hospital",bags:0,contact:"01800-777888",status:"Resolved"}
  ],
  meetings:[
    {title:"Monthly General Meeting",date:"2026-10-15",time:"08:00 PM",location:"Club Hall",attendance:"Pending",agenda:"Monthly accounts, tournament, membership"},
    {title:"Executive Committee Meeting",date:"2026-10-20",time:"07:30 PM",location:"Meeting Room",attendance:"Scheduled",agenda:"Budget and maintenance"}
  ],
  polls:[
    {question:"আগামী মাসে কোন event করা হবে?",options:["Football","Cricket","Picnic","Cultural Program"],votes:[28,22,34,16],status:"Active"},
    {question:"Club uniform color নির্বাচন",options:["Green","White","Black"],votes:[55,21,24],status:"Closed"}
  ],
  inventory:[
    {item:"Football",category:"Sports",qty:8,min:3,unit:"pcs"},
    {item:"Cricket Bat",category:"Sports",qty:5,min:2,unit:"pcs"},
    {item:"Plastic Chair",category:"Furniture",qty:80,min:20,unit:"pcs"},
    {item:"Table",category:"Furniture",qty:10,min:3,unit:"pcs"},
    {item:"Wireless Mic",category:"Equipment",qty:2,min:2,unit:"pcs"},
    {item:"First Aid Kit",category:"Emergency",qty:4,min:2,unit:"box"}
  ],
  staff:[
    {name:"Karim Mia",role:"Club Manager",salary:18000,status:"Active"},
    {name:"Jamal Hossain",role:"Security",salary:14000,status:"Active"},
    {name:"Rina Begum",role:"Cleaner",salary:10000,status:"Active"},
    {name:"Babul Ahmed",role:"Coach",salary:16000,status:"Active"}
  ],
  facilities:[
    {name:"Club Hall",capacity:120,booking:"2026-10-15",bookedBy:"ABC Club",status:"Approved"},
    {name:"Playground",capacity:80,booking:"2026-10-12",bookedBy:"Football Team",status:"Approved"},
    {name:"Meeting Room",capacity:20,booking:"2026-10-20",bookedBy:"Committee",status:"Approved"}
  ],
  documents:[
    {name:"Club Constitution 2026.pdf",category:"Constitution",date:"2026-01-05",size:"2.4 MB"},
    {name:"September Financial Report.pdf",category:"Finance",date:"2026-10-01",size:"1.1 MB"},
    {name:"Executive Committee List.pdf",category:"Committee",date:"2026-01-10",size:"580 KB"},
    {name:"AGM Minutes 2026.pdf",category:"Meeting",date:"2026-02-20",size:"890 KB"}
  ],
  gallery:["Annual Football Tournament","Eid Gathering","Blood Donation Camp","Committee Meeting","Family Picnic","Volunteer Award Night"],
  activities:[
    {time:"10:32 AM",user:"Treasurer",action:"Added expense",detail:"৳5,000 — Sports equipment"},
    {time:"10:20 AM",user:"Secretary",action:"Approved member",detail:"CLB-0050 — Mim Rahman"},
    {time:"09:55 AM",user:"Admin",action:"Published notice",detail:"Monthly General Meeting"},
    {time:"09:30 AM",user:"Treasurer",action:"Verified payment",detail:"RC-2026-00892"},
    {time:"Yesterday",user:"President",action:"Created event",detail:"Family Picnic 2026"}
  ],
  notices:[
    {title:"Monthly General Meeting",text:"আগামী ১৫ অক্টোবর রাত ৮টায় Club Hall-এ মাসিক সাধারণ সভা অনুষ্ঠিত হবে।",priority:"High"},
    {title:"Membership Fee Reminder",text:"চলতি মাসের membership fee ১০ অক্টোবরের মধ্যে পরিশোধ করুন।",priority:"Normal"},
    {title:"Football Tournament",text:"বার্ষিক ফুটবল টুর্নামেন্ট ১২ অক্টোবর অনুষ্ঠিত হবে।",priority:"Normal"}
  ]
};

let state={page:"dashboard", dark:false, role:"Super Admin", lang:"বাংলা"};

function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove("show"),2200)}
function setPage(p){state.page=p; $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===p));render(); if(innerWidth<760)$("#sidebar").classList.remove("open")}
function openModal(title,body,footer=""){ $("#modal").innerHTML=`<div class="modal-head"><h2>${title}</h2><button class="close" onclick="closeModal()">✕</button></div>${body}${footer?`<div class="actions" style="justify-content:flex-end;margin-top:18px">${footer}</div>`:""}`;$("#modalBackdrop").classList.add("show")}
function closeModal(){$("#modalBackdrop").classList.remove("show")}
function formModal(title, fields, onSave){
  const body=`<form id="dynamicForm" class="form-grid">${fields.map(f=>`<div class="field ${f.full?'full':''}"><label>${f.label}</label>${f.type==="select"?`<select name="${f.name}">${f.options.map(o=>`<option>${o}</option>`).join("")}</select>`:`<input name="${f.name}" type="${f.type||"text"}" value="${f.value||""}" placeholder="${f.placeholder||""}" ${f.required?"required":""}>`}</div>`).join("")}</form>`;
  openModal(title,body,`<button class="btn btn-secondary" onclick="closeModal()">Cancel</button><button class="btn btn-primary" id="saveDynamic">Save</button>`);
  $("#saveDynamic").onclick=()=>{const data=Object.fromEntries(new FormData($("#dynamicForm")));onSave(data)}
}
function pageHead(title,sub,actions=""){return `<div class="page-head"><div><h1>${title}</h1><p>${sub}</p></div><div class="actions">${actions}</div></div>`}
function table(headers,rows){return `<div class="table-wrap"><table class="table"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.length?rows.join(""):`<tr><td colspan="${headers.length}" class="empty">কোনো data পাওয়া যায়নি</td></tr>`}</tbody></table></div>`}
function person(m){return `<div class="person"><div class="avatar">${initials(m.name)}</div><div><b>${m.name}</b><small class="muted">${m.id}</small></div></div>`}
function status(s){let c=s.toLowerCase();return `<span class="status ${c}">${s}</span>`}

function dashboard(){
  const income=db.transactions.filter(x=>x.type==="Income").reduce((a,b)=>a+b.amount,0);
  const expense=db.transactions.filter(x=>x.type==="Expense").reduce((a,b)=>a+b.amount,0);
  const due=db.members.reduce((a,b)=>a+b.fee,0);
  return pageHead("Dashboard","আজকের Club overview — 06 October 2026",`<button class="btn btn-primary" onclick="quickAdd()">＋ Quick Add</button>`)
  +`<div class="grid stats">
    ${stat("মোট সদস্য","348","↗ 8.4% this year","♙")}
    ${stat("Active Member","321","92.2% active","●")}
    ${stat("এই মাসের আয়",money(income),"+12.5% vs last month","৳")}
    ${stat("বকেয়া",money(due),"12 members due","!")}
  </div>
  <div class="grid quick-grid" style="margin-bottom:16px">
    ${quick("👥","Add Member","member")}${quick("৳","Add Expense","expense")}${quick("◷","Create Event","event")}${quick("🩸","Blood Request","blood")}
  </div>
  <div class="grid cols-2">
    <div class="card"><div class="card-title"><h3>Income vs Expense</h3><a onclick="setPage('finance')">View finance →</a></div>
      <div class="chart">${[55,70,45,82,64,90,76].map((v,i)=>`<div class="bar-wrap"><div class="bar" style="height:${v}%"></div><div class="bar expense" style="height:${Math.max(12,v-35)}%"></div><div class="bar-label">${["Apr","May","Jun","Jul","Aug","Sep","Oct"][i]}</div></div>`).join("")}</div>
      <div class="badge-row" style="margin-top:12px"><span class="tag">Income ${money(income)}</span><span class="tag" style="background:#fff0f0;color:#b43d3d">Expense ${money(expense)}</span></div>
    </div>
    <div class="card"><div class="card-title"><h3>Upcoming Events</h3><a onclick="setPage('events')">See all →</a></div>
      <div class="list">${db.events.slice(0,4).map(e=>`<div class="list-item"><div><b>${e.title}</b><div class="muted">${e.date} • ${e.time} • ${e.location}</div></div>${status(e.status)}</div>`).join("")}</div>
    </div>
  </div>
  <div class="grid cols-2" style="margin-top:16px">
    <div class="card"><div class="card-title"><h3>Latest Members</h3><a onclick="setPage('members')">Manage →</a></div>
      ${table(["Member","Blood","Area","Status"],db.members.slice(0,4).map(m=>`<tr><td>${person(m)}</td><td><span class="tag">${m.blood}</span></td><td>${m.area}</td><td>${status(m.status)}</td></tr>`))}
    </div>
    <div class="card"><div class="card-title"><h3>Latest Notices</h3><a onclick="noticeModal()">＋ New</a></div>
      <div class="list">${db.notices.map(n=>`<div class="list-item"><div><b>${n.title}</b><div class="muted">${n.text}</div></div>${n.priority==="High"?status("Pending"):""}</div>`).join("")}</div>
    </div>
  </div>
  <div class="card" style="margin-top:16px"><div class="card-title"><h3>Collection Progress</h3><b>91%</b></div><div class="progress"><span style="width:91%"></span></div><div class="muted" style="margin-top:7px">এই মাসে target ${money(100000)} এর মধ্যে ${money(91000)} collected</div></div>`;
}
function stat(label,value,delta,icon){return `<div class="card stat-card"><div class="stat-icon">${icon}</div><div class="label">${label}</div><div class="value">${value}</div><div class="delta">${delta}</div></div>`}
function quick(icon,title,page){return `<button class="quick" onclick="${page==='member'?'memberModal()':page==='expense'?'expenseModal()':page==='event'?'eventModal()':'emergencyModal()'}"><span>${icon}</span><b>${title}</b><small class="muted">Create new</small></button>`}

function members(){
  return pageHead("Member Management","সকল সদস্যের profile, status ও membership fee",`<button class="btn btn-secondary" onclick="exportData('members')">⇩ Export</button><button class="btn btn-primary" onclick="memberModal()">＋ Add Member</button>`)
  +`<div class="card"><div class="filters"><input id="memberFilter" placeholder="Search name / ID / phone..." oninput="filterMembers()"><select id="bloodFilter" onchange="filterMembers()"><option value="">All blood groups</option>${["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(x=>`<option>${x}</option>`).join("")}</select><select id="statusFilter" onchange="filterMembers()"><option value="">All status</option><option>Active</option><option>Inactive</option><option>Pending</option></select></div><div id="memberTable">${memberTable(db.members)}</div></div>`;
}
function memberTable(list){return table(["Member","Phone","Blood","Area","Join Date","Due","Status","Action"],list.map(m=>`<tr><td>${person(m)}</td><td>${m.phone}</td><td>${m.blood}</td><td>${m.area}</td><td>${m.join}</td><td>${m.fee?money(m.fee):"—"}</td><td>${status(m.status)}</td><td><button class="btn btn-secondary" onclick="memberView('${m.id}')">View</button></td></tr>`))}
function filterMembers(){let q=$("#memberFilter").value.toLowerCase(),b=$("#bloodFilter").value,s=$("#statusFilter").value;let l=db.members.filter(m=>(!q||JSON.stringify(m).toLowerCase().includes(q))&&(!b||m.blood===b)&&(!s||m.status===s));$("#memberTable").innerHTML=memberTable(l)}

function committee(){return pageHead("Committee","ক্লাবের বর্তমান executive committee",`<button class="btn btn-primary" onclick="committeeModal()">＋ Add Position</button>`)
+`<div class="grid cols-3">${db.committee.map(c=>`<div class="card"><div class="avatar" style="width:46px;height:46px">${initials(c.name)}</div><h3 style="margin:12px 0 3px">${c.name}</h3><div class="tag">${c.role}</div><div class="muted" style="margin-top:9px">☎ ${c.phone}</div></div>`).join("")}</div>`}

function finance(){
 let inc=db.transactions.filter(x=>x.type==="Income").reduce((a,b)=>a+b.amount,0), exp=db.transactions.filter(x=>x.type==="Expense").reduce((a,b)=>a+b.amount,0);
 return pageHead("Finance & Accounting","Income, expense, cashbook ও balance",`<button class="btn btn-secondary" onclick="expenseModal()">＋ Expense</button><button class="btn btn-primary" onclick="incomeModal()">＋ Income</button>`)
 +`<div class="grid stats">${stat("Total Income",money(inc),"This demo period","↑")}${stat("Total Expense",money(exp),"This demo period","↓")}${stat("Net Balance",money(inc-exp),"Available balance","৳")}${stat("Pending Due",money(db.members.reduce((a,b)=>a+b.fee,0)),"From members","!")}</div>
 <div class="grid cols-2"><div class="card"><div class="card-title"><h3>Cashbook</h3><button class="btn btn-secondary" onclick="exportData('transactions')">Export</button></div>${table(["Date","Type","Category","Description","Amount","By"],db.transactions.map(t=>`<tr><td>${t.date}</td><td>${t.type==="Income"?status("Paid"):status("Due")}</td><td>${t.category}</td><td>${t.desc}</td><td><b>${money(t.amount)}</b></td><td>${t.by}</td></tr>`))}</div>
 <div class="card"><div class="card-title"><h3>Accounts</h3></div>${["Cash","Bank Account","bKash","Nagad"].map((x,i)=>`<div class="kpi"><span>${x}</span><strong>${money([18500,72000,31500,9800][i])}</strong></div>`).join("")}<div class="card" style="margin-top:12px;background:#eef8f4;border:0"><div class="muted">Total liquid balance</div><div class="big-number">${money(131800)}</div></div></div></div>`;
}

function payments(){return pageHead("Payments & Receipts","Member payments, verification এবং digital receipt",`<button class="btn btn-primary" onclick="paymentModal()">＋ Record Payment</button>`)
+`<div class="card">${table(["Receipt","Member","Purpose","Amount","Method","Date","Status","Action"],db.payments.map(p=>`<tr><td><b>${p.receipt}</b></td><td>${p.member}</td><td>${p.purpose}</td><td>${money(p.amount)}</td><td>${p.method}</td><td>${p.date}</td><td>${status(p.status)}</td><td><button class="btn btn-secondary" onclick="receipt('${p.receipt}')">Receipt</button></td></tr>`))}</div>`}

function events(){return pageHead("Events & Programs","অনুষ্ঠান, registration, participants ও status",`<button class="btn btn-primary" onclick="eventModal()">＋ Create Event</button>`)
+`<div class="grid cols-2">${db.events.map(e=>`<div class="card"><div class="card-title"><h3>${e.title}</h3>${status(e.status)}</div><div class="muted">📅 ${e.date} • ${e.time}</div><div class="muted">📍 ${e.location}</div><div style="margin-top:15px"><div style="display:flex;justify-content:space-between;font-size:11px"><span>Registration</span><b>${e.registered}</b></div><div class="progress" style="margin-top:6px"><span style="width:${Math.min(100,e.registered/120*100)}%"></span></div></div><div class="actions" style="margin-top:15px"><button class="btn btn-secondary" onclick="eventDetails('${e.id}')">Details</button><button class="btn btn-primary" onclick="toast('Registration opened')">Register</button></div></div>`).join("")}</div>`}

function attendance(){return pageHead("Attendance","Event ও meeting attendance tracking",`<button class="btn btn-primary" onclick="attendanceModal()">＋ Mark Attendance</button>`)
+`<div class="grid stats">${stat("Today Present","78","out of 102","✓")}${stat("Attendance Rate","76.5%","This week","%")}${stat("Events","14","This month","◷")}${stat("Absent","24","Today","!")}</div><div class="card">${table(["Date","Event","Present","Total","Rate","Action"],db.attendance.map(a=>`<tr><td>${a.date}</td><td>${a.event}</td><td>${a.present}</td><td>${a.total}</td><td>${Math.round(a.present/a.total*100)}%</td><td><button class="btn btn-secondary" onclick="toast('Attendance sheet opened')">Open</button></td></tr>`))}</div>`}

function blood(){let counts={};db.donors.forEach(d=>counts[d.blood]=(counts[d.blood]||0)+1);return pageHead("Blood Donor Directory","জরুরি প্রয়োজনে দ্রুত donor খুঁজুন",`<button class="btn btn-primary" onclick="donorModal()">＋ Add Donor</button>`)
+`<div class="grid stats">${["A+","B+","O+","O-"].map(x=>stat(x,counts[x]||0,"Registered donors","🩸")).join("")}</div><div class="card"><div class="filters"><input id="donorQ" placeholder="Search donor / area..." oninput="filterDonors()"><select id="donorBlood" onchange="filterDonors()"><option value="">All groups</option>${Object.keys(counts).map(x=>`<option>${x}</option>`).join("")}</select></div><div id="donorTable">${donorTable(db.donors)}</div></div>`}
function donorTable(l){return table(["Donor","Blood","Phone","Area","Last Donation","Available","Action"],l.map(d=>`<tr><td>${person({name:d.name,id:"Donor"})}</td><td><span class="tag">${d.blood}</span></td><td>${d.phone}</td><td>${d.area}</td><td>${d.last}</td><td>${d.available?status("Active"):status("Inactive")}</td><td><button class="btn btn-primary" onclick="toast('Calling '+d.name)">Call</button></td></tr>`))}
function filterDonors(){let q=$("#donorQ").value.toLowerCase(),b=$("#donorBlood").value;$("#donorTable").innerHTML=donorTable(db.donors.filter(d=>(!q||JSON.stringify(d).toLowerCase().includes(q))&&(!b||d.blood===b)))}

function emergency(){return pageHead("Emergency Help","Blood, medical এবং urgent support requests",`<button class="btn btn-danger" onclick="emergencyModal()">＋ New Request</button>`)
+`<div class="grid cols-2">${db.emergencies.map(e=>`<div class="card"><div class="card-title"><h3>⚠ ${e.type}</h3>${e.status==="Active"?status("Pending"):status("Approved")}</div><div class="kpi"><span>Patient</span><strong>${e.patient}</strong></div><div class="kpi"><span>Blood</span><strong>${e.blood}</strong></div><div class="kpi"><span>Hospital</span><strong>${e.hospital}</strong></div><div class="kpi"><span>Contact</span><strong>${e.contact}</strong></div>${e.bags?`<div class="kpi"><span>Required</span><strong>${e.bags} bags</strong></div>`:""}<div class="actions" style="margin-top:14px"><button class="btn btn-primary" onclick="toast('Showing matching donors')">Find Donors</button><button class="btn btn-secondary" onclick="toast('Request shared')">Share</button></div></div>`).join("")}</div>`}

function meetings(){return pageHead("Meetings & Minutes","Agenda, attendance, decisions এবং minutes",`<button class="btn btn-primary" onclick="meetingModal()">＋ Schedule Meeting</button>`)
+`<div class="grid cols-2">${db.meetings.map(m=>`<div class="card"><div class="card-title"><h3>${m.title}</h3><span class="tag">${m.attendance}</span></div><div class="muted">📅 ${m.date} • ${m.time}</div><div class="muted">📍 ${m.location}</div><p style="font-size:12px">${m.agenda}</p><button class="btn btn-secondary" onclick="minutesModal('${m.title}')">Open Minutes / Agenda</button></div>`).join("")}</div>`}

function polls(){return pageHead("Polls & Voting","সদস্যদের মতামত ও club decisions",`<button class="btn btn-primary" onclick="pollModal()">＋ Create Poll</button>`)
+`<div class="grid cols-2">${db.polls.map(p=>{let total=p.votes.reduce((a,b)=>a+b,0);return `<div class="card"><div class="card-title"><h3>${p.question}</h3>${status(p.status)}</div>${p.options.map((o,i)=>`<div style="margin:11px 0"><div style="display:flex;justify-content:space-between;font-size:11px"><span>${o}</span><b>${p.votes[i]} (${Math.round(p.votes[i]/total*100)}%)</b></div><div class="progress" style="margin-top:5px"><span style="width:${p.votes[i]/total*100}%"></span></div></div>`).join("")}<button class="btn btn-secondary" onclick="toast('Poll opened')">View Details</button></div>`}).join("")}</div>`}

function gallery(){return pageHead("Photo Gallery","Club memories, events ও achievements",`<button class="btn btn-primary" onclick="galleryModal()">＋ Add Photo</button>`)
+`<div class="gallery">${db.gallery.map(x=>`<div class="photo"><span>${x}</span></div>`).join("")}</div>`}

function documents(){return pageHead("Documents","Constitution, reports, minutes ও club files",`<button class="btn btn-primary" onclick="documentModal()">＋ Upload Document</button>`)
+`<div class="card">${table(["Document","Category","Date","Size","Action"],db.documents.map(d=>`<tr><td>📄 <b>${d.name}</b></td><td><span class="tag">${d.category}</span></td><td>${d.date}</td><td>${d.size}</td><td><button class="btn btn-secondary" onclick="toast('Demo download started')">Download</button></td></tr>`))}</div>`}

function inventory(){return pageHead("Inventory","Sports, furniture, equipment ও stock",`<button class="btn btn-primary" onclick="inventoryModal()">＋ Add Item</button>`)
+`<div class="card">${table(["Item","Category","Quantity","Unit","Minimum","Status","Action"],db.inventory.map(i=>`<tr><td><b>${i.item}</b></td><td>${i.category}</td><td>${i.qty}</td><td>${i.unit}</td><td>${i.min}</td><td>${i.qty<=i.min?status("Pending"):status("Active")}</td><td><button class="btn btn-secondary" onclick="toast('Stock adjustment opened')">Adjust</button></td></tr>`))}</div>`}

function staff(){let total=db.staff.reduce((a,b)=>a+b.salary,0);return pageHead("Staff & Salary","Club employees, attendance ও salary",`<button class="btn btn-primary" onclick="staffModal()">＋ Add Staff</button>`)
+`<div class="grid stats">${stat("Staff",db.staff.length,"Active employees","♟")}${stat("Monthly Payroll",money(total),"Estimated","৳")}${stat("Paid","3","This month","✓")}${stat("Leave","1","Current","!")}</div><div class="card">${table(["Staff","Role","Salary","Status","Action"],db.staff.map(s=>`<tr><td>${person({name:s.name,id:"Staff"})}</td><td>${s.role}</td><td>${money(s.salary)}</td><td>${status(s.status)}</td><td><button class="btn btn-secondary" onclick="toast('Salary slip opened')">Salary Slip</button></td></tr>`))}</div>`}

function facilities(){return pageHead("Facility Booking","Hall, playground, meeting room ও resources",`<button class="btn btn-primary" onclick="facilityModal()">＋ New Booking</button>`)
+`<div class="grid cols-3">${db.facilities.map(f=>`<div class="card"><div class="card-title"><h3>${f.name}</h3>${status(f.status)}</div><div class="muted">Capacity: ${f.capacity}</div><div class="kpi"><span>Booking</span><strong>${f.booking}</strong></div><div class="kpi"><span>Booked by</span><strong>${f.bookedBy}</strong></div><button class="btn btn-secondary" onclick="toast('Facility calendar opened')">Calendar</button></div>`).join("")}</div>`}

function reports(){return pageHead("Reports & Analytics","Management reports — demo data",`<button class="btn btn-primary" onclick="toast('PDF report generated')">⇩ Generate PDF</button>`)
+`<div class="grid cols-3"><div class="card"><div class="card-title"><h3>Membership</h3></div><div class="big-number">348</div><div class="muted">Total registered</div><div class="kpi"><span>Active</span><strong>321</strong></div><div class="kpi"><span>Pending</span><strong>14</strong></div><div class="kpi"><span>Inactive</span><strong>13</strong></div></div><div class="card"><div class="card-title"><h3>Finance</h3></div><div class="big-number">${money(131800)}</div><div class="muted">Current balance</div><div class="kpi"><span>Income</span><strong>${money(85500)}</strong></div><div class="kpi"><span>Expense</span><strong>${money(42300)}</strong></div></div><div class="card"><div class="card-title"><h3>Activities</h3></div><div class="big-number">92%</div><div class="muted">Member engagement</div><div class="progress" style="margin-top:12px"><span style="width:92%"></span></div><div class="kpi"><span>Events</span><strong>14</strong></div></div></div>
+<div class="card" style="margin-top:16px"><div class="card-title"><h3>Report Center</h3></div><div class="quick-grid">${["Member List","Fee Collection","Income Report","Expense Report","Event Report","Attendance","Donation","Inventory"].map(x=>`<button class="quick" onclick="toast('${x} report generated')"><span>▤</span><b>${x}</b><small class="muted">Generate report</small></button>`).join("")}</div></div>`}

function activity(){return pageHead("Audit Log","কে কখন কী পরিবর্তন করেছে",`<button class="btn btn-secondary" onclick="exportData('activities')">Export Log</button>`)
+`<div class="card"><div class="timeline">${db.activities.map(a=>`<div class="timeline-item"><b>${a.action}</b><div class="muted">${a.user} • ${a.time}</div><div style="font-size:12px;margin-top:4px">${a.detail}</div></div>`).join("")}</div></div>`}

function settings(){return pageHead("Club Settings","Club profile, fees, language ও system preferences",`<button class="btn btn-primary" onclick="toast('Settings saved')">Save Changes</button>`)
+`<div class="grid cols-2"><div class="card"><div class="card-title"><h3>Club Profile</h3></div><div class="form-grid"><div class="field"><label>Club Name</label><input value="ABC Club BD"></div><div class="field"><label>Club Code</label><input value="ABC-001"></div><div class="field full"><label>Address</label><input value="Mirpur, Dhaka, Bangladesh"></div><div class="field"><label>Phone</label><input value="01700-123456"></div><div class="field"><label>Email</label><input value="admin@abcclub.bd"></div></div></div>
+<div class="card"><div class="card-title"><h3>Membership Rules</h3></div><div class="form-grid"><div class="field"><label>Admission Fee</label><input value="500"></div><div class="field"><label>Monthly Fee</label><input value="200"></div><div class="field"><label>Annual Fee</label><input value="2000"></div><div class="field"><label>Grace Period (days)</label><input value="10"></div></div><div class="kpi" style="margin-top:15px"><span>Language</span><strong>বাংলা / English</strong></div><div class="kpi"><span>Currency</span><strong>BDT (৳)</strong></div></div></div>`}

const pages={dashboard,members,committee,finance,payments,events,attendance,blood,emergency,meetings,polls,gallery,documents,inventory,staff,facilities,reports,activity,settings};
function render(){$("#page").innerHTML=pages[state.page]();$("#roleLabel").textContent=state.role}
function quickAdd(){openModal("Quick Add",`<div class="quick-grid">${quick("👥","Member","member")}${quick("৳","Income","income")}${quick("৳","Expense","expense")}${quick("◷","Event","event")}${quick("🩸","Blood Request","blood")}${quick("📢","Notice","notice")}</div>`)}
function memberModal(){formModal("Add New Member",[
{label:"Full Name",name:"name",required:true},{label:"Phone",name:"phone",required:true},{label:"Blood Group",name:"blood",type:"select",options:["A+","A-","B+","B-","O+","O-","AB+","AB-"]},{label:"Area",name:"area"},{label:"Profession",name:"profession"},{label:"Join Date",name:"join",type:"date"},{label:"Membership Status",name:"status",type:"select",options:["Active","Pending","Inactive"]},{label:"Initial Due",name:"fee",type:"number"}],d=>{db.members.unshift({id:"CLB-"+String(51+db.members.length).padStart(4,"0"),name:d.name,phone:d.phone,blood:d.blood,area:d.area,profession:d.profession,join:d.join,status:d.status,fee:Number(d.fee||0)});closeModal();toast("Member added successfully");render()})}
function memberView(id){let m=db.members.find(x=>x.id===id);openModal(m.name,`<div class="grid cols-2"><div class="card"><div class="muted">Member ID</div><b>${m.id}</b><div class="kpi"><span>Phone</span><strong>${m.phone}</strong></div><div class="kpi"><span>Blood</span><strong>${m.blood}</strong></div><div class="kpi"><span>Area</span><strong>${m.area}</strong></div><div class="kpi"><span>Profession</span><strong>${m.profession}</strong></div></div><div class="card"><div class="muted">Membership</div><h2>${status(m.status)}</h2><div class="kpi"><span>Join date</span><strong>${m.join}</strong></div><div class="kpi"><span>Current due</span><strong>${money(m.fee)}</strong></div><button class="btn btn-primary" onclick="toast('Digital ID opened')">🪪 Digital ID</button></div></div>`)}
function incomeModal(){formModal("Add Income",[{label:"Category",name:"category",type:"select",options:["Membership Fee","Donation","Sponsorship","Event Income","Other"]},{label:"Amount",name:"amount",type:"number",required:true},{label:"Description",name:"desc"},{label:"Received By",name:"by"}],d=>{db.transactions.unshift({date:new Date().toISOString().slice(0,10),type:"Income",category:d.category,desc:d.desc,amount:Number(d.amount),by:d.by||"Admin"});closeModal();toast("Income recorded");render()})}
function expenseModal(){formModal("Add Expense",[{label:"Category",name:"category",type:"select",options:["Electricity","Sports","Event","Maintenance","Salary","Refreshment","Other"]},{label:"Amount",name:"amount",type:"number",required:true},{label:"Description",name:"desc"},{label:"Paid By",name:"by"}],d=>{db.transactions.unshift({date:new Date().toISOString().slice(0,10),type:"Expense",category:d.category,desc:d.desc,amount:Number(d.amount),by:d.by||"Admin"});closeModal();toast("Expense recorded");render()})}
function paymentModal(){formModal("Record Payment",[{label:"Member",name:"member",type:"select",options:db.members.map(m=>m.name)},{label:"Purpose",name:"purpose",type:"select",options:["Monthly Membership Fee","Admission Fee","Annual Fee","Event Fee","Donation"]},{label:"Amount",name:"amount",type:"number",required:true},{label:"Method",name:"method",type:"select",options:["Cash","bKash","Nagad","Rocket","Bank"]}],d=>{db.payments.unshift({receipt:"RC-"+Date.now().toString().slice(-8),member:d.member,purpose:d.purpose,amount:Number(d.amount),method:d.method,date:new Date().toISOString().slice(0,10),status:"Paid"});closeModal();toast("Payment saved & receipt generated");render()})}
function receipt(r){let p=db.payments.find(x=>x.receipt===r);openModal("Digital Receipt",`<div class="card" style="text-align:center"><div class="brand-mark" style="margin:auto">C<span>+</span></div><h2>ABC CLUB BD</h2><div class="muted">Payment Receipt</div><hr style="border:0;border-top:1px solid var(--line);margin:18px 0"><div class="kpi"><span>Receipt No</span><strong>${p.receipt}</strong></div><div class="kpi"><span>Member</span><strong>${p.member}</strong></div><div class="kpi"><span>Purpose</span><strong>${p.purpose}</strong></div><div class="kpi"><span>Amount</span><strong>${money(p.amount)}</strong></div><div class="kpi"><span>Method</span><strong>${p.method}</strong></div><div class="muted" style="margin-top:15px">Thank you for your contribution.</div></div>`,`<button class="btn btn-secondary" onclick="toast('Print dialog opened')">🖨 Print</button><button class="btn btn-primary" onclick="toast('PDF saved')">⇩ PDF</button>`)}

function eventModal(){formModal("Create Event",[{label:"Event Title",name:"title",required:true},{label:"Date",name:"date",type:"date"},{label:"Time",name:"time"},{label:"Location",name:"location"},{label:"Capacity",name:"capacity",type:"number"}],d=>{db.events.unshift({id:"EV-"+Date.now().toString().slice(-4),title:d.title,date:d.date,time:d.time,location:d.location,registered:0,confirmed:0,status:"Open"});closeModal();toast("Event created");render()})}
function eventDetails(id){let e=db.events.find(x=>x.id===id);openModal(e.title,`<div class="grid cols-2"><div class="card"><div class="kpi"><span>Date</span><strong>${e.date}</strong></div><div class="kpi"><span>Time</span><strong>${e.time}</strong></div><div class="kpi"><span>Location</span><strong>${e.location}</strong></div></div><div class="card"><div class="big-number">${e.registered}</div><div class="muted">Registered</div><div class="kpi"><span>Confirmed</span><strong>${e.confirmed}</strong></div><div class="kpi"><span>Status</span><strong>${status(e.status)}</strong></div></div></div>`,`<button class="btn btn-primary" onclick="toast('Attendance sheet created')">Attendance</button>`)}

function attendanceModal(){formModal("Mark Attendance",[{label:"Event",name:"event",type:"select",options:db.events.map(e=>e.title)},{label:"Present",name:"present",type:"number"},{label:"Total",name:"total",type:"number"}],d=>{db.attendance.unshift({date:new Date().toISOString().slice(0,10),event:d.event,present:Number(d.present),total:Number(d.total)});closeModal();toast("Attendance saved");render()})}
function donorModal(){formModal("Add Blood Donor",[{label:"Name",name:"name"},{label:"Blood Group",name:"blood",type:"select",options:["A+","A-","B+","B-","O+","O-","AB+","AB-"]},{label:"Phone",name:"phone"},{label:"Area",name:"area"},{label:"Last Donation",name:"last",type:"date"}],d=>{db.donors.unshift({...d,available:true});closeModal();toast("Donor added");render()})}
function emergencyModal(){formModal("Emergency Request",[{label:"Type",name:"type",type:"select",options:["Blood Request","Medical Help","Emergency Transport","Financial Help"]},{label:"Patient / Person",name:"patient"},{label:"Blood Group",name:"blood",type:"select",options:["A+","A-","B+","B-","O+","O-","AB+","AB-"]},{label:"Hospital / Location",name:"hospital"},{label:"Required Bags",name:"bags",type:"number"},{label:"Contact",name:"contact"}],d=>{db.emergencies.unshift({id:"ER-"+Date.now().toString().slice(-3),...d,bags:Number(d.bags||0),status:"Active"});closeModal();toast("Emergency request published");render()})}
function meetingModal(){formModal("Schedule Meeting",[{label:"Title",name:"title"},{label:"Date",name:"date",type:"date"},{label:"Time",name:"time"},{label:"Location",name:"location"},{label:"Agenda",name:"agenda"}],d=>{db.meetings.unshift({...d,attendance:"Scheduled"});closeModal();toast("Meeting scheduled");render()})}
function minutesModal(title){openModal(title+" — Minutes",`<div class="field"><label>Agenda / Discussion</label><textarea>1. Monthly accounts review\n2. Upcoming event planning\n3. Membership issues\n4. Other business</textarea></div><div class="field" style="margin-top:12px"><label>Decisions</label><textarea>Decision #01 — Event budget approved.\nDecision #02 — Maintenance work assigned to manager.</textarea></div>`)}
function pollModal(){formModal("Create Poll",[{label:"Question",name:"question"},{label:"Options (comma separated)",name:"options"}],d=>{let ops=d.options.split(",").map(x=>x.trim()).filter(Boolean);db.polls.unshift({question:d.question,options:ops,votes:ops.map(()=>0),status:"Active"});closeModal();toast("Poll created");render()})}
function galleryModal(){formModal("Add Gallery Photo",[{label:"Caption",name:"caption"},{label:"Category",name:"category",type:"select",options:["Events","Sports","Charity","Meetings","Family"]}],d=>{db.gallery.unshift(d.caption||"New Club Memory");closeModal();toast("Photo added to demo gallery");render()})}
function documentModal(){formModal("Upload Document",[{label:"Document Name",name:"name"},{label:"Category",name:"category",type:"select",options:["Constitution","Finance","Committee","Meeting","Certificate","Other"]}],d=>{db.documents.unshift({name:d.name,category:d.category,date:new Date().toISOString().slice(0,10),size:"Demo"});closeModal();toast("Document added");render()})}
function inventoryModal(){formModal("Add Inventory Item",[{label:"Item",name:"item"},{label:"Category",name:"category",type:"select",options:["Sports","Furniture","Equipment","Emergency","Other"]},{label:"Quantity",name:"qty",type:"number"},{label:"Unit",name:"unit"},{label:"Minimum Stock",name:"min",type:"number"}],d=>{db.inventory.unshift({...d,qty:Number(d.qty),min:Number(d.min)});closeModal();toast("Inventory item added");render()})}
function staffModal(){formModal("Add Staff",[{label:"Name",name:"name"},{label:"Role",name:"role"},{label:"Monthly Salary",name:"salary",type:"number"}],d=>{db.staff.unshift({...d,salary:Number(d.salary),status:"Active"});closeModal();toast("Staff added");render()})}
function facilityModal(){formModal("New Facility Booking",[{label:"Facility",name:"facility",type:"select",options:db.facilities.map(x=>x.name)},{label:"Date",name:"date",type:"date"},{label:"Booked By",name:"by"},{label:"Purpose",name:"purpose"}],d=>{toast("Booking request submitted");closeModal()})}
function committeeModal(){formModal("Add Committee Position",[{label:"Position",name:"role"},{label:"Name",name:"name"},{label:"Phone",name:"phone"}],d=>{db.committee.push(d);closeModal();toast("Committee position added");render()})}
function noticeModal(){formModal("New Notice",[{label:"Title",name:"title"},{label:"Notice",name:"text"},{label:"Priority",name:"priority",type:"select",options:["Normal","High"]}],d=>{db.notices.unshift(d);closeModal();toast("Notice published");render()})}
function exportData(key){let data=JSON.stringify(db[key]||db.members,null,2);let a=document.createElement("a");a.href="data:application/json;charset=utf-8,"+encodeURIComponent(data);a.download=key+".json";a.click();toast("Demo data exported")}
function boot(){
  $$("#nav .nav-item").forEach(b=>b.onclick=()=>setPage(b.dataset.page));
  $("#themeBtn").onclick=()=>{state.dark=!state.dark;document.body.classList.toggle("dark",state.dark);$("#themeBtn").textContent=state.dark?"☀ Light mode":"☾ Dark mode"};
  $("#roleBtn").onclick=()=>{state.role=state.role==="Super Admin"?"Member":"Super Admin";$("#roleLabel").textContent=state.role;toast("Role switched to "+state.role)};
  $("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");
  $("#notificationBtn").onclick=()=>openModal("Notifications",`<div class="list">${db.notices.map(n=>`<div class="list-item"><div><b>${n.title}</b><div class="muted">${n.text}</div></div>🔔</div>`).join("")}</div>`);
  $("#langBtn").onclick=()=>{state.lang=state.lang==="বাংলা"?"English":"বাংলা";$("#langBtn").textContent=state.lang;toast("Language demo switched")};
  $("#globalSearch").oninput=e=>{let q=e.target.value.toLowerCase();if(q){let m=db.members.filter(x=>JSON.stringify(x).toLowerCase().includes(q));if(m.length){setPage("members");setTimeout(()=>{$("#memberFilter").value=q;filterMembers()},0)}}};
  $("#modalBackdrop").onclick=e=>{if(e.target.id==="modalBackdrop")closeModal()};
  render();
}
boot();
