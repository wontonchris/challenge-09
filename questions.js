const licenses = [
    {
      name: "Apache 2.0 License",
      value:
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    },
  
    {
      name: "Boost Software License 1.0",
      value:
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    },
    {
      name: "BSD 3-Clause License",
      value:
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    },
    {
      name: "BSD 2-Clause License",
      value:
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    },
    {
      name: "CCO",
      value:
        "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    },
    {
      name: "Attribution-ShareAlike 4.0 International",
      value:
        "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
    },
    {
      name: "Attribution-NonCommercial 4.0 International",
      value:
        "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)",
    },
    {
      name: "Attribution-NoDerivates 4.0 International",
      value:
        "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)",
    },
    {
      name: "Attribution-NonCommmercial-ShareAlike 4.0 International",
      value:
        "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)",
    },
    {
      name: "Attribution-NonCommercial-NoDerivatives 4.0 International",
      value:
        "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)",
    },
    {
      name: "Eclipse Public License 1.0",
      value:
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    },
    {
      name: "GNU GPL v3",
      value:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    },
    {
      name: "GNU GPL v2",
      value:
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    },
    {
      name: "GNU AGPL v3",
      value:
        "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    },
    {
      name: "GNU LGPL v3",
      value:
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    },
    {
      name: "GNU FDL v1.3",
      value:
        "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
    },
    {
      name: "The Hippocratic License 2.1",
      value:
        "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
    },
    {
      name: "The Hippocratic License 3.0",
      value:
        "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
    },
    {
      name: "IBM Public License Version 1.0",
      value:
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    },
    {
      name: "ISC License (ISC)",
      value:
        "[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    },
    {
      name: "The MIT License",
      value:
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    },
    {
      name: "Mozilla Public License 2.0",
      value:
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    },
    {
      name: "Attribution License (BY)",
      value:
        "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
    },
    {
      name: "Open Database License (ODbL)",
      value:
        "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
    },
    {
      name: "Pearl",
      value:
        "![License Artistic-2.0](https://img.shields.io/badge/License-Artistic--2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    },
    {
      name: "The Artistic License 2.0",
      value:
        "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    },
    {
      name: "SIL Open Font License 1.1",
      value:
        "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    },
    {
      name: "The Unlicense",
      value:
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    },
    {
      name: "WTFPL",
      value:
        "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
    },
    {
      name: "Zlib",
      value:
        "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
    },
  ];

const questions = [
    { 
        type: 'input',
        message: 'What is the name of your Project?',
        name: 'projectName',
        default: 'README GENERATOR',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
        default: 'This is a README generator',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What is the GitHub username for this project?',
        name: 'github',
        default: '',
    },
    {
        type: 'input',
        message: 'What is the email address for this project?',
        name: 'email',
        default: '',
    },
    {
        type: "list",
        message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
        name: "License",
        choices: licenses,
      }

];


module.exports = {
    questions, licenses
    
}