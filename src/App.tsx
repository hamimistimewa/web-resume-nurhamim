import React from 'react';
import { Linkedin, Mail, Phone, Globe, Calendar, ExternalLink, Award, CheckCircle } from 'lucide-react';

function App() {
  const certifications = [

    {
      name: "Alibaba Cloud Certified Associate (Cloud Security)",
      provider: "Alibaba Cloud",
      id: "IACA02241000169724L",
      issued: "2024-10-24",
      expires: "2026-10-24",
      verifyUrl: "https://edu.alibabacloud.com/certification/"
    },
    {
      name: "CNSS Network Security Specialist",
      provider: "ICSI",
      id: "18767503",
      issued: "2020-05-29",
      expires: "-",
      verifyUrl: "https://www.credential.net/49fdd474-d6ab-4484-9910-7213eb8354e1"
    },
    {
      name: "IBM Cloud Essentials",
      provider: "IBM",
      id: "-",
      issued: "2021-04-24",
      expires: "-",
      verifyUrl: "https://www.credly.com/badges/fca99c5a-903a-473b-b938-224b3e8c6ee0"
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      provider: "AWS Training and Certification",
      id: "-",
      issued: "2023-03-07",
      expires: "-",
      verifyUrl: "https://www.credly.com/badges/c2ac1271-6945-4f26-9835-157f72847c3e"
    },
    {
      name: "Nutanix Certified Professional - Multicloud Infrastructure 6",
      provider: "Nutanix",
      id: "-",
      issued: "2024-11-16",
      expires: "2026-11-16",
      verifyUrl: "https://www.credly.com/badges/966bed41-2e01-4bf1-96c5-b4b5a7324ff5"
    },
    {
      name: "Nutanix Certified Associate 6",
      provider: "Nutanix",
      id: "-",
      issued: "2024-11-02",
      expires: "2026-11-02",
      verifyUrl: "https://www.credly.com/badges/d7565ef9-7731-4ae3-8364-edb341c6410f"
    },
    {
      name: "Cloud Tech Professional Microsoft 365",
      provider: "Acronis",
      id: "-",
      issued: "2025-01-03",
      expires: "2026-01-03",
      verifyUrl: "https://www.credly.com/badges/59afab2b-c77a-4556-8d9c-2dfbf49aff06"
    },
    {
      name: "Cloud Tech Professional Advanced Backup",
      provider: "Acronis",
      id: "-",
      issued: "2025-01-07",
      expires: "2026-01-07",
      verifyUrl: "https://www.credly.com/badges/49caf1d0-e2db-4805-8090-3fddfc838bde"
    },
    {
      name: "Cloud Tech Professional Advanced Disaster Recovery",
      provider: "Acronis",
      id: "-",
      issued: "2025-01-07",
      expires: "2026-01-07",
      verifyUrl: "https://www.credly.com/badges/9b999fe9-d108-4367-9c60-ecd0f90e7a60"
    },
    {
      name: "SE: High-end Storage Credential 2024",
      provider: "Dell",
      id: "K2664VQYQNBQQNKY",
      issued: "2024-10-24",
      expires: "-",
      verifyUrl: "https://www.certmetrics.com/dell/public/verification.aspx?"
    },
    {
      name: "SE: MidRange Storage Credential 2024",
      provider: "Dell",
      id: "Y9N14TSQQNE413SV",
      issued: "2024-10-03",
      expires: "-",
      verifyUrl: "https://www.certmetrics.com/dell/public/verification.aspx?"
    },
    {
      name: "SE: Server Credential 2024",
      provider: "Dell",
      id: "RMGHECQYY1QQ1WS2",
      issued: "2024-10-08",
      expires: "",
      verifyUrl: "https://www.certmetrics.com/dell/public/verification.aspx?"
    }
  ];

  const skills = {
    "Cloud Platforms": ["AWS", "Azure", "Alibaba Cloud", "Biznet Gio", "CloudKilat", "Digital Ocean"],
    "Operating Systems": ["Red Hat", "CentOS", "Ubuntu", "Almalinux", "Rocky Linux", "CloudLinux", "AIX", "Windows Server"],
    "Database Server": ["MariaDB", "MySQL Server", "SQL Server"],
    "Virtualization": ["VMware", "Nutanix", "Proxmox VE", "OpenStack", "KVM"],
    "Containers": ["Docker", "Kubernetes", "RKE"],
    "Web Hosting": ["cPanel/WHM", "Plesk", "CWP"],
    "Monitoring": ["Zabbix", "Prometheus", "Grafana", "PRTG"],
    "Security": ["CyberArk"]
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920')] opacity-10 bg-cover bg-center" />
        <div className="relative">
          <div className="container mx-auto px-4 py-20 max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl mb-6">
                <img 
                  src="https://cdn-blinux.s3-id-jkt-1.kilatstorage.id/hamim.jpeg" 
                  alt="Nur Hamim"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-indigo-100">
                Nur Hamim
              </h1>
              <h2 className="text-xl text-blue-200 mb-8">Linux and Cloud Engineer</h2>
              
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { icon: Mail, href: "mailto:hamimistimewa@gmail.com", label: "Email" },
                  { icon: Linkedin, href: "https://linkedin.com/in/nurhamimistimewa", label: "LinkedIn" },
                  { icon: Globe, href: "https://syslab.id", label: "Blog" },
                  { icon: Phone, href: "https://wa.me/6281225787990", label: "Contact" }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2 rounded-lg transition-all duration-300"
                  >
                    <item.icon size={18} className="text-blue-200 group-hover:text-white transition-colors" />
                    <span className="text-blue-100 group-hover:text-white transition-colors">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 max-w-5xl py-12 -mt-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {/* About Me Section */}
            <section className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-900">About Me</h3>
              <p className="text-gray-600 leading-relaxed">
              I am an experienced IT System Administrator responsible for managing and troubleshooting virtual machines across cloud platforms (Azure, AWS, Alibaba, Biznet Gio, CloudKilat) and on-premise infrastructures (VMware, Nutanix, Proxmox VE, OpenStack). My expertise includes daily operations, maintenance, and patching to ensure system stability and performance. I am highly adaptable, detail-oriented, and committed to optimizing IT environments for efficiency and reliability.
              </p>
            </section>

            {/* Education Section */}
            <section className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-blue-900">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-blue-100">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
                  <h4 className="font-semibold text-gray-800">INDRAPRASTA UNIVERSITY (UNINDRA)</h4>
                  <p className="text-gray-600">Informatics Engineering | 2020 - 2025</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-blue-100">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
                  <h4 className="font-semibold text-gray-800">SMK NEGERI 1 TAMBELANGAN</h4>
                  <p className="text-gray-600">Teknik Komputer & Jaringan | 2014 - 2017</p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-blue-900">Work Experience</h3>
               {/* Information Technology System Administrator */}
              <div className="relative pl-6 border-l-2 border-blue-100">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
                <h4 className="font-semibold text-gray-800">Information Technology System Administrator</h4>
                <p className="text-gray-500 text-sm mb-4">PT Clarus Innovace Teknologi | Sep 2024 - Present</p>
                
                <div className="space-y-4">
                  
                  <div>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Provide support for Project NCBS (New Core Banking Server) implementation in PT Bank Mandiri Taspen</li>
                      <li>Perform daily activity monitoring to ensure system stability and performance.</li>
                      <li>Conduct preventive maintenance for NCBS servers to minimize downtime.</li>
                      <li>Maintain and manage all DC/DRC (Data Center/Disaster Recovery Center) servers for NCBS operations.</li>
                      <li>Assist with NCBS application setup and deployment.</li>
                      <li>Monitor IT infrastructure and ensure seamless day-to-day operations.</li>
                      <li>Manage and troubleshoot Load Balancer (GSLB) to optimize traffic distribution.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <br></br>
              
              {/* Information Technology System Administrator */}
                <div className="relative pl-6 border-l-2 border-blue-100">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
                <h4 className="font-semibold text-gray-800">Information Technology System Administrator</h4>
                <p className="text-gray-500 text-sm mb-4">PT Commonwealth Bank Indonesia | May 2023 - Sep 2024 (1 year 5 months)</p>
                
                <div className="space-y-4">
                  
                  <div>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Manage and maintain cloud infrastructure (Azure) and on-premise infrastructure (VMware).</li>
                      <li>Handle escalations for infrastructure-related issues.</li>
                      <li>Perform patch management to ensure system security and stability.</li>
                      <li>Conduct installation and configuration of services as per PLO requests.</li>
                      <li>Provide technical support to PLO for any infrastructure-related incidents.</li>
                      <li>Support various projects related to production and SDLC environments.</li>
                      <li>Assist in DC/DR (Disaster Recovery) activities related to infrastructure.</li>
                      <li>Perform VM migration using SRM (Site Recovery Manager).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <br></br>
            
               {/* Information Technology System Administrator (Contract) */}
                <div className="relative pl-6 border-l-2 border-blue-100">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
                <h4 className="font-semibold text-gray-800">Information Technology System Administrator (Contract)</h4>
                <p className="text-gray-500 text-sm mb-4">PT Commonwealth Bank Indonesia | Aug 2022 - Feb 2023 (7 months)</p>
                
                <div className="space-y-4">
                  
                  <div>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Managed CyberArk project implementation.</li>
                      <li>Handled issue escalations related to CyberArk.</li>
                      <li>Troubleshot server access environments (AIX, Linux, Windows Server) related to CyberArk.</li>
                    </ul>
                  </div>
                </div>
              </div>

            <br></br>
            
            {/* System Operation Engineer */}
             <div className="relative pl-6 border-l-2 border-blue-100">
             <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
             <h4 className="font-semibold text-gray-800">System Operation Engineer</h4>
             <p className="text-gray-500 text-sm mb-4">Biznet Gio Cloud (PT Biznet Gio Nusantara) | Oct 2021 - Feb 2022 (5 months)</p>
             
             <div className="space-y-4">
               
               <div>
                 <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                   <li>Managed overall Biznet GIO Hosting, Email, and DNS Products for both internal and external users.</li>
                   <li>Performed daily checks, proactive monitoring, patching, upgrades, and troubleshooting.</li>
                   <li>Handled escalations from L1 and L2 team members via the internal ticketing system.</li>
                   <li>Identified common problems and created proper troubleshooting guidance/flow for future reference.</li>
                 </ul>
               </div>
             </div>
           </div>

           <br></br>

            {/* Product Operation Support */}
                <div className="relative pl-6 border-l-2 border-blue-100">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
                <h4 className="font-semibold text-gray-800">Product Operation Support</h4>
                <p className="text-gray-500 text-sm mb-4">Biznet Gio Cloud (PT Biznet Gio Nusantara) | Jul 2019 - Oct 2021 (2 years 4 months)</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 mb-2 text-sm font-medium">Key Responsibilities:</p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Provided first-level troubleshooting and problem analysis via phone, email, and live chat for all Biznet GIO services, including:</li>
                      <ul>
                        <li>Biznet GIO Cloud (VMware)</li>
                        <li>Biznet GIO Private Cloud (VMware)</li>
                        <li>Biznet GIO Backup Service (Acronis)</li>
                        <li>Biznet NEO Cloud Service (OpenStack)</li>
                        <li>Biznet NEO Flex Storage (S3)</li>
                        <li>Shared & Dedicated Web Hosting (cPanel & Plesk)</li>
                        <li>Domain services</li>
                      </ul>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-2 text-sm font-medium">Key Achievements & Tasks:</p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Managed customer services such as WHM/Plesk installation and cloud computing setup (VMware & OpenStack).</li>
                      <li>Monitored system health, performed automation tasks, maintenance, and supported reporting systems.</li>
                      <li>Configured and troubleshot customer cloud services (web services, database services) to ensure smooth operations.</li>
                      <li>Configured and troubleshot network issues in virtual routers, including firewall, port forwarding, load balancing, and NAT.</li>
                      <li>Worked closely with L2 Engineers to resolve customer issues and escalated to L3 Engineers when necessary.</li>
                      <li>Experienced with monitoring tools (Grafana, Prometheus, PRTG, Netdata, Nagios, etc.).</li>
                      <li>Proficient in Linux environments (CentOS, Ubuntu, Debian, RedHat, etc.).</li>
                    </ul>
                  </div>
                </div>
              </div>
            
            <br></br>
                {/* Linux Support Engineer */}
                <div className="relative pl-6 border-l-2 border-blue-100">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500" />
                <h4 className="font-semibold text-gray-800">Linux Support Engineer</h4>
                <p className="text-gray-500 text-sm mb-4">PT. Infinys System Indonesia | April 2018 - July 2019 (1 year 4 months)</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 mb-2 text-sm font-medium">Key Responsibilities:</p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Provided first-level troubleshooting and problem analysis via phone and email for CloudKilat services, including:</li>
                      <ul>
                        <li>Kilat VM 2.0 (Virtual Machine)</li>
                        <li>Kilat Hosting</li>
                        <li>Kilat Plesk (Plesk Panel)</li>
                        <li>Domain services</li>
                      </ul>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-2 text-sm font-medium">Key Achievements & Tasks:</p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Managed customer support, including WHM and Plesk installation.</li>
                      <li>Monitored system health, automated tasks, performed maintenance, and supported reporting systems.</li>
                      <li>Configured and troubleshot customer cloud services such as web services and databases to ensure proper functionality.</li>
                      <li>Configured and troubleshot network issues in virtual routers, including firewall, port forwarding, load balancing, and NAT.</li>
                      <li>Worked with monitoring tools like Grafana, Prometheus, and PRTG.</li>
                      <li>Proficient in Linux environments, including CentOS, Ubuntu, Debian, and RedHat.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills Section */}
            <section className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-blue-900">Technical Skills</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span 
                          key={item} 
                          className="text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications Section */}
            <section className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-blue-900">Verified Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div 
                    key={cert.id} 
                    className="p-4 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-800">{cert.name}</h4>
                        <p className="text-sm text-gray-500">{cert.provider}</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                        Active
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2 text-gray-600">
                        <Award size={14} className="text-blue-600" />
                        <span className="text-gray-500">ID:</span> {cert.id}
                      </p>
                      <p className="flex items-center gap-2 text-gray-600">
                        <Calendar size={14} className="text-blue-600" />
                        <span className="text-gray-500">Expires:</span> {new Date(cert.expires).toLocaleDateString()}
                      </p>
                      <a 
                        href={cert.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <CheckCircle size={14} />
                        Verify
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-blue-200">© 2024 Nur Hamim. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;