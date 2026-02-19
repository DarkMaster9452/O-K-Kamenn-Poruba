// ====================================
// OŠK KAMENNÁ PORUBA - DATABÁZA
// ====================================

// Všetci používatelia v systéme
const USERS = {
    // TRÉNERI
    'jan_klimo': {
        username: 'jan_klimo',
        password: 'heslo123',
        role: 'coach',
        fullName: 'Ján Klímo',
        email: 'jan.klimo@osk-poruba.sk',
        phone: '+421 905 123 456',
        categories: ['pripravka_u9', 'pripravka_u11', 'ziaci'],
        yearsOfExperience: 8,
        createdDate: '2024-01-15'
    },
    'marian_horvath': {
        username: 'marian_horvath',
        password: 'heslo123',
        role: 'coach',
        fullName: 'Marián Horváth',
        email: 'marian.horvath@osk-poruba.sk',
        phone: '+421 905 234 567',
        categories: ['dorastenci'],
        yearsOfExperience: 12,
        createdDate: '2023-06-10'
    },
    'peter_novak': {
        username: 'peter_novak',
        password: 'heslo123',
        role: 'coach',
        fullName: 'Peter Novák',
        email: 'peter.novak@osk-poruba.sk',
        phone: '+421 905 345 678',
        categories: ['adults_young', 'adults_pro'],
        yearsOfExperience: 15,
        createdDate: '2022-03-20'
    },

    // HRÁČI
    // --- Prípravka U9 ---
    'jozef_adamcik': { /* ...existing code... */ },
    'marko_adamcik': { /* ...existing code... */ },
    // --- Prípravka U11 ---
    'adam_hrasko': {
        username: 'adam_hrasko',
        password: 'heslo123',
        role: 'player',
        fullName: 'Adam Hraško',
        email: 'adam.hrasko@gmail.com',
        phone: '+421 908 555 111',
        dateOfBirth: '2014-04-10',
        category: 'pripravka_u11',
        position: 'Obranca',
        shirtNumber: 7,
        parentUsername: null,
        createdDate: '2024-02-10',
        stats: { matches: 70, minutes: 3500, goals: 3, yellowCards: 1, secondYellow: 0, redCards: 0 }
    },
    'michal_kovac': {
        username: 'michal_kovac',
        password: 'heslo123',
        role: 'player',
        fullName: 'Michal Kováč',
        email: 'michal.kovac@gmail.com',
        phone: '+421 908 555 112',
        dateOfBirth: '2013-09-22',
        category: 'pripravka_u11',
        position: 'Útočník',
        shirtNumber: 8,
        parentUsername: null,
        createdDate: '2024-02-10',
        stats: { matches: 65, minutes: 3300, goals: 4, yellowCards: 2, secondYellow: 0, redCards: 0 }
    },
    // --- Žiaci ---
    'simon_ziak': {
        username: 'simon_ziak',
        password: 'heslo123',
        role: 'player',
        fullName: 'Šimon Žiak',
        email: 'simon.ziak@gmail.com',
        phone: '+421 908 555 113',
        dateOfBirth: '2012-03-15',
        category: 'ziaci',
        position: 'Stredopoliar',
        shirtNumber: 11,
        parentUsername: null,
        createdDate: '2024-02-10',
        stats: { matches: 90, minutes: 5000, goals: 7, yellowCards: 3, secondYellow: 0, redCards: 0 }
    },
    'martin_kral': {
        username: 'martin_kral',
        password: 'heslo123',
        role: 'player',
        fullName: 'Martin Kráľ',
        email: 'martin.kral@gmail.com',
        phone: '+421 908 555 114',
        dateOfBirth: '2011-07-19',
        category: 'ziaci',
        position: 'Útočník',
        shirtNumber: 12,
        parentUsername: null,
        createdDate: '2024-02-10',
        stats: { matches: 88, minutes: 4800, goals: 6, yellowCards: 2, secondYellow: 0, redCards: 0 }
    },
    // --- Dorastenci ---
    'lukas_kuba': { /* ...existing code... */ },
    'jakub_horvath': { /* ...existing code... */ },
    // --- Dospelí - Mladí ---
    'stefan_polak': { /* ...existing code... */ },
    'michal_urban': {
        username: 'michal_urban',
        password: 'heslo123',
        role: 'player',
        fullName: 'Michal Urban',
        email: 'michal.urban@gmail.com',
        phone: '+421 908 555 556',
        dateOfBirth: '2003-01-20',
        category: 'adults_young',
        position: 'Obranca',
        shirtNumber: 15,
        parentUsername: null,
        yearsInClub: 2,
        createdDate: '2024-02-01',
        stats: { matches: 95, minutes: 5200, goals: 7, yellowCards: 3, secondYellow: 0, redCards: 0 }
    },
    // --- Dospelí - Skúsení ---
    'robert_sabo': { /* ...existing code... */ },
    'julius_mikula': {
        username: 'julius_mikula',
        password: 'heslo123',
        role: 'player',
        fullName: 'Július Mikula',
        email: 'julius.mikula@gmail.com',
        phone: '+421 908 444 445',
        dateOfBirth: '1997-05-10',
        category: 'adults_pro',
        position: 'Stredopoliar',
        shirtNumber: 13,
        parentUsername: null,
        yearsInClub: 7,
        createdDate: '2023-01-01',
        stats: { matches: 150, minutes: 9000, goals: 12, yellowCards: 7, secondYellow: 1, redCards: 1 }
    },
    'jozef_adamcik': {
        username: 'jozef_adamcik',
        password: 'heslo123',
        role: 'player',
        fullName: 'Jozef Adamčík',
        email: 'jozef.adamcik@gmail.com',
        phone: '+421 908 111 111',
        dateOfBirth: '2015-05-12',
        category: 'pripravka_u9',
        position: 'Brankár',
        shirtNumber: 1,
        parentUsername: 'anna_adamcikova',
        createdDate: '2024-01-10',
        stats: {
            matches: 162,
            minutes: 9351,
            goals: 10,
            yellowCards: 8,
            secondYellow: 0,
            redCards: 0
        }
    },
    'marko_adamcik': {
        username: 'marko_adamcik',
        password: 'heslo123',
        role: 'player',
        fullName: 'Marko Adamčík',
        email: 'marko.adamcik@gmail.com',
        phone: '+421 908 111 112',
        dateOfBirth: '2017-08-25',
        category: 'pripravka_u9',
        position: 'Obranca',
        shirtNumber: 4,
        parentUsername: 'anna_adamcikova',
        createdDate: '2024-01-10',
        stats: {
            matches: 80,
            minutes: 4200,
            goals: 5,
            yellowCards: 2,
            secondYellow: 0,
            redCards: 0
        }
    },
    'adam_hrasko': {
        username: 'adam_hrasko',
        password: 'heslo123',
        role: 'player',
        fullName: 'Adam Hraško',
        email: 'adam.hrasko@gmail.com',
        phone: '+421 908 555 111',
        dateOfBirth: '2014-04-10',
        category: 'pripravka_u11',
        position: 'Obranca',
        shirtNumber: 7,
        parentUsername: null,
        createdDate: '2024-02-10',
        stats: {
            matches: 70,
            minutes: 3500,
            goals: 3,
            yellowCards: 1,
            secondYellow: 0,
            redCards: 0
        }
    },
    'michal_kovac': {
        username: 'michal_kovac',
        password: 'heslo123',
        role: 'player',
        fullName: 'Michal Kováč',
        email: 'michal.kovac@gmail.com',
        phone: '+421 908 555 112',
        dateOfBirth: '2013-09-22',
        category: 'pripravka_u11',
        position: 'Útočník',
        shirtNumber: 8,
        parentUsername: null,
        createdDate: '2024-02-10',
        stats: {
            matches: 65,
            minutes: 3300,
            goals: 4,
            yellowCards: 2,
            secondYellow: 0,
            redCards: 0
        }
    },
    'simon_ziak': {
        username: 'simon_ziak',
        password: 'heslo123',
        role: 'player',
        fullName: 'Šimon Žiak',
        email: 'simon.ziak@gmail.com',
        phone: '+421 908 555 113',
        dateOfBirth: '2012-03-15',
        category: 'ziaci',
        position: 'Stredopoliar',
        shirtNumber: 11,
        parentUsername: null,
        createdDate: '2024-02-10',
        stats: {
            matches: 90,
            minutes: 5000,
            goals: 7,
            yellowCards: 3,
            secondYellow: 0,
            redCards: 0
        }
    },
    'martin_kral': {
        username: 'martin_kral',
        password: 'heslo123',
        role: 'player',
        fullName: 'Martin Kráľ',
        email: 'martin.kral@gmail.com',
        phone: '+421 908 555 114',
        dateOfBirth: '2011-07-19',
        category: 'ziaci',
        position: 'Útočník',
        shirtNumber: 12,
        parentUsername: null,
        createdDate: '2024-02-10',
        stats: {
            matches: 88,
            minutes: 4800,
            goals: 6,
            yellowCards: 2,
            secondYellow: 0,
            redCards: 0
        }
    },
    'lukas_kuba': {
        username: 'lukas_kuba',
        password: 'heslo123',
        role: 'player',
        fullName: 'Lukáš Kuba',
        email: 'lukas.kuba@gmail.com',
        phone: '+421 908 222 222',
        dateOfBirth: '2013-03-18',
        category: 'dorastenci',
        position: 'Stredopoliar',
        shirtNumber: 6,
        parentUsername: 'milan_kuba',
        createdDate: '2024-01-15',
        stats: {
            matches: 120,
            minutes: 7000,
            goals: 8,
            yellowCards: 4,
            secondYellow: 0,
            redCards: 0
        }
    },
    'jakub_horvath': {
        username: 'jakub_horvath',
        password: 'heslo123',
        role: 'player',
        fullName: 'Jakub Horváth',
        email: 'jakub.horvath@gmail.com',
        phone: '+421 908 333 333',
        dateOfBirth: '2014-11-07',
        category: 'dorastenci',
        position: 'Útočník',
        shirtNumber: 9,
        parentUsername: 'eva_horvathova',
        createdDate: '2024-01-20',
        stats: {
            matches: 110,
            minutes: 6500,
            goals: 9,
            yellowCards: 5,
            secondYellow: 0,
            redCards: 0
        }
    },
    'robert_sabo': {
        username: 'robert_sabo',
        password: 'heslo123',
        role: 'player',
        fullName: 'Róbert Sabo',
        email: 'robert.sabo@gmail.com',
        phone: '+421 908 444 444',
        dateOfBirth: '1998-06-22',
        category: 'adults_pro',
        position: 'Obranca',
        shirtNumber: 3,
        parentUsername: null,
        yearsInClub: 8,
        createdDate: '2023-01-01',
        stats: {
            matches: 162,
            minutes: 9351,
            goals: 10,
            yellowCards: 8,
            secondYellow: 0,
            redCards: 0
        }
    },
    'julius_mikula': {
        username: 'julius_mikula',
        password: 'heslo123',
        role: 'player',
        fullName: 'Július Mikula',
        email: 'julius.mikula@gmail.com',
        phone: '+421 908 444 445',
        dateOfBirth: '1997-05-10',
        category: 'adults_pro',
        position: 'Stredopoliar',
        shirtNumber: 13,
        parentUsername: null,
        yearsInClub: 7,
        createdDate: '2023-01-01',
        stats: {
            matches: 150,
            minutes: 9000,
            goals: 12,
            yellowCards: 7,
            secondYellow: 1,
            redCards: 1
        }
    },
    'stefan_polak': {
        username: 'stefan_polak',
        password: 'heslo123',
        role: 'player',
        fullName: 'Štefan Polák',
        email: 'stefan.polak@gmail.com',
        phone: '+421 908 555 555',
        dateOfBirth: '2002-09-14',
        category: 'adults_young',
        position: 'Stredopoliar',
        shirtNumber: 5,
        parentUsername: null,
        yearsInClub: 3,
        createdDate: '2023-06-15',
        stats: {
            matches: 100,
            minutes: 6000,
            goals: 5,
            yellowCards: 3,
            secondYellow: 0,
            redCards: 0
        }
    },
    'tomas_kamenicky': {
        username: 'tomas_kamenicky',
        password: 'heslo123',
        role: 'player',
        fullName: 'Tomáš Kamenický',
        email: 'tomas.kamenicky@gmail.com',
        phone: '+421 908 666 666',
        dateOfBirth: '2010-02-28',
        category: 'pripravka_u9',
        position: 'Útočník',
        shirtNumber: 10,
        parentUsername: 'julius_kamenicky',
        createdDate: '2024-02-01',
        stats: {
            matches: 75,
            minutes: 3900,
            goals: 6,
            yellowCards: 2,
            secondYellow: 0,
            redCards: 0
        }
    },
    'michal_urban': {
        username: 'michal_urban',
        password: 'heslo123',
        role: 'player',
        fullName: 'Michal Urban',
        email: 'michal.urban@gmail.com',
        phone: '+421 908 555 556',
        dateOfBirth: '2003-01-20',
        category: 'adults_young',
        position: 'Obranca',
        shirtNumber: 15,
        parentUsername: null,
        yearsInClub: 2,
        createdDate: '2024-02-01',
        stats: {
            matches: 95,
            minutes: 5200,
            goals: 7,
            yellowCards: 3,
            secondYellow: 0,
            redCards: 0
        }
    },
    'lukas_kuba': {
        username: 'lukas_kuba',
        password: 'heslo123',
        role: 'player',
        fullName: 'Lukáš Kuba',
        email: 'lukas.kuba@gmail.com',
        phone: '+421 908 222 222',
        dateOfBirth: '2013-03-18',
        category: 'dorastenci',
        position: 'Stredopoliar',
        shirtNumber: 6,
        parentUsername: 'milan_kuba',
        createdDate: '2024-01-15'
    },
    'jakub_horvath': {
        username: 'jakub_horvath',
        password: 'heslo123',
        role: 'player',
        fullName: 'Jakub Horváth',
        email: 'jakub.horvath@gmail.com',
        phone: '+421 908 333 333',
        dateOfBirth: '2014-11-07',
        category: 'dorastenci',
        position: 'Útočník',
        shirtNumber: 9,
        parentUsername: 'eva_horvathova',
        createdDate: '2024-01-20'
    },
    'robert_sabo': {
        username: 'robert_sabo',
        password: 'heslo123',
        role: 'player',
        fullName: 'Róbert Sabo',
        email: 'robert.sabo@gmail.com',
        phone: '+421 908 444 444',
        dateOfBirth: '1998-06-22',
        category: 'adults_pro',
        position: 'Obranca',
        shirtNumber: 3,
        parentUsername: null,
        yearsInClub: 8,
        createdDate: '2023-01-01'
    },
    'stefan_polak': {
        username: 'stefan_polak',
        password: 'heslo123',
        role: 'player',
        fullName: 'Štefan Polák',
        email: 'stefan.polak@gmail.com',
        phone: '+421 908 555 555',
        dateOfBirth: '2002-09-14',
        category: 'adults_young',
        position: 'Stredopoliar',
        shirtNumber: 5,
        parentUsername: null,
        yearsInClub: 3,
        createdDate: '2023-06-15'
    },
    'tomas_kamenicky': {
        username: 'tomas_kamenicky',
        password: 'heslo123',
        role: 'player',
        fullName: 'Tomáš Kamenický',
        email: 'tomas.kamenicky@gmail.com',
        phone: '+421 908 666 666',
        dateOfBirth: '2010-02-28',
        category: 'pripravka_u9',
        position: 'Útočník',
        shirtNumber: 10,
        parentUsername: 'julius_kamenicky',
        createdDate: '2024-02-01'
    },

    // RODIČIA
    'anna_adamcikova': {
        username: 'anna_adamcikova',
        password: 'heslo123',
        role: 'parent',
        fullName: 'Anna Adamčíková',
        email: 'anna.adamcikova@gmail.com',
        phone: '+421 907 777 777',
        children: ['jozef_adamcik', 'marko_adamcik'],
        createdDate: '2024-01-10'
    },
    'milan_kuba': {
        username: 'milan_kuba',
        password: 'heslo123',
        role: 'parent',
        fullName: 'Milan Kuba',
        email: 'milan.kuba@gmail.com',
        phone: '+421 907 888 888',
        children: ['lukas_kuba'],
        createdDate: '2024-01-15'
    },
    'eva_horvathova': {
        username: 'eva_horvathova',
        password: 'heslo123',
        role: 'parent',
        fullName: 'Eva Horváthová',
        email: 'eva.horvathova@gmail.com',
        phone: '+421 907 999 999',
        children: ['jakub_horvath'],
        createdDate: '2024-01-20'
    },
    'julius_kamenicky': {
        username: 'julius_kamenicky',
        password: 'heslo123',
        role: 'parent',
        fullName: 'Július Kamenický',
        email: 'julius.kamenicky@gmail.com',
        phone: '+421 907 666 666',
        children: ['tomas_kamenicky'],
        createdDate: '2024-02-01'
    }
};

// Všetci hráči s podrobnosťami
const PLAYERS = {
    // --- Prípravka U9 ---
    'jozef_adamcik': {
        username: 'jozef_adamcik',
        fullName: 'Jozef Adamčík',
        dateOfBirth: '2015-05-12',
        age: 10,
        category: 'pripravka_u9',
        position: 'Brankár',
        shirtNumber: 1,
        height: 145,
        weight: 38,
        joinedClub: '2023-09-01',
        parent: 'anna_adamcikova',
        skills: { dribbling: 6, passing: 7, shooting: 5, defense: 8 }
    },
    'marko_adamcik': {
        username: 'marko_adamcik',
        fullName: 'Marko Adamčík',
        dateOfBirth: '2017-08-25',
        age: 8,
        category: 'pripravka_u9',
        position: 'Obranca',
        shirtNumber: 4,
        height: 135,
        weight: 32, 
        joinedClub: '2023-10-15',
        parent: 'anna_adamcikova',
        skills: { dribbling: 5, passing: 6, shooting: 4, defense: 7 }
    },
    // --- Prípravka U11 ---
    'adam_hrasko': {
        username: 'adam_hrasko',
        fullName: 'Adam Hraško',
        dateOfBirth: '2014-04-10',
        age: 11,
        category: 'pripravka_u11',
        position: 'Obranca',
        shirtNumber: 7,
        height: 140,
        weight: 36,
        joinedClub: '2024-02-10',
        parent: null,
        skills: { dribbling: 6, passing: 7, shooting: 5, defense: 7 }
    },
    'michal_kovac': {
        username: 'michal_kovac',
        fullName: 'Michal Kováč',
        dateOfBirth: '2013-09-22',
        age: 12,
        category: 'pripravka_u11',
        position: 'Útočník',
        shirtNumber: 8,
        height: 142,
        weight: 37,
        joinedClub: '2024-02-10',
        parent: null,
        skills: { dribbling: 7, passing: 6, shooting: 6, defense: 6 }
    },
    // --- Žiaci ---
    'simon_ziak': {
        username: 'simon_ziak',
        fullName: 'Šimon Žiak',
        dateOfBirth: '2012-03-15',
        age: 13,
        category: 'ziaci',
        position: 'Stredopoliar',
        shirtNumber: 11,
        height: 150,
        weight: 41,
        joinedClub: '2024-02-10',
        parent: null,
        skills: { dribbling: 7, passing: 7, shooting: 6, defense: 7 }
    },
    'martin_kral': {
        username: 'martin_kral',
        fullName: 'Martin Kráľ',
        dateOfBirth: '2011-07-19',
        age: 14,
        category: 'ziaci',
        position: 'Útočník',
        shirtNumber: 12,
        height: 153,
        weight: 43,
        joinedClub: '2024-02-10',
        parent: null,
        skills: { dribbling: 6, passing: 6, shooting: 7, defense: 6 }
    },
    // --- Dorastenci ---
    'lukas_kuba': {
        username: 'lukas_kuba',
        fullName: 'Lukáš Kuba',
        dateOfBirth: '2013-03-18',
        age: 12,
        category: 'dorastenci',
        position: 'Stredopoliar',
        shirtNumber: 6,
        height: 160,
        weight: 48,
        joinedClub: '2022-06-01',
        parent: 'milan_kuba',
        skills: { dribbling: 7, passing: 8, shooting: 6, defense: 6 }
    },
    'jakub_horvath': {
        username: 'jakub_horvath',
        fullName: 'Jakub Horváth',
        dateOfBirth: '2014-11-07',
        age: 11,
        category: 'dorastenci',
        position: 'Útočník',
        shirtNumber: 9,
        height: 155,
        weight: 45,
        joinedClub: '2023-08-20',
        parent: 'eva_horvathova',
        skills: { dribbling: 8, passing: 6, shooting: 8, defense: 5 }
    },
    // --- Dospelí - Mladí ---
    'stefan_polak': {
        username: 'stefan_polak',
        fullName: 'Štefan Polák',
        dateOfBirth: '2002-09-14',
        age: 23,
        category: 'adults_young',
        position: 'Stredopoliar',
        shirtNumber: 5,
        height: 175,
        weight: 70,
        joinedClub: '2021-09-01',
        parent: null,
        skills: { dribbling: 7, passing: 8, shooting: 6, defense: 7 }
    },
    'michal_urban': {
        username: 'michal_urban',
        fullName: 'Michal Urban',
        dateOfBirth: '2003-01-20',
        age: 23,
        category: 'adults_young',
        position: 'Obranca',
        shirtNumber: 15,
        height: 178,
        weight: 72,
        joinedClub: '2024-02-01',
        parent: null,
        skills: { dribbling: 6, passing: 7, shooting: 5, defense: 8 }
    },
    // --- Dospelí - Skúsení ---
    'robert_sabo': {
        username: 'robert_sabo',
        fullName: 'Róbert Sabo',
        dateOfBirth: '1998-06-22',
        age: 27,
        category: 'adults_pro',
        position: 'Obranca',
        shirtNumber: 3,
        height: 182,
        weight: 78,
        joinedClub: '2016-07-01',
        parent: null,
        yearsInClub: 8,
        skills: { dribbling: 7, passing: 7, shooting: 5, defense: 9 }
    },
    'julius_mikula': {
        username: 'julius_mikula',
        fullName: 'Július Mikula',
        dateOfBirth: '1997-05-10',
        age: 28,
        category: 'adults_pro',
        position: 'Stredopoliar',
        shirtNumber: 13,
        height: 180,
        weight: 80,
        joinedClub: '2017-01-01',
        parent: null,
        yearsInClub: 7,
        skills: { dribbling: 7, passing: 8, shooting: 7, defense: 8 }
    },
    'lukas_kuba': {
        username: 'lukas_kuba',
        fullName: 'Lukáš Kuba',
        dateOfBirth: '2013-03-18',
        age: 12,
        category: 'dorastenci',
        position: 'Stredopoliar',
        shirtNumber: 6,
        height: 160,
        weight: 48,
        joinedClub: '2022-06-01',
        parent: 'milan_kuba',
        skills: { dribbling: 7, passing: 8, shooting: 6, defense: 6 }
    },
    'jakub_horvath': {
        username: 'jakub_horvath',
        fullName: 'Jakub Horváth',
        dateOfBirth: '2014-11-07',
        age: 11,
        category: 'dorastenci',
        position: 'Útočník',
        shirtNumber: 9,
        height: 155,
        weight: 45,
        joinedClub: '2023-08-20',
        parent: 'eva_horvathova',
        skills: { dribbling: 8, passing: 6, shooting: 8, defense: 5 }
    },
    'robert_sabo': {
        username: 'robert_sabo',
        fullName: 'Róbert Sabo',
        dateOfBirth: '1998-06-22',
        age: 27,
        category: 'adults_pro',
        position: 'Obranca',
        shirtNumber: 3,
        height: 182,
        weight: 78,
        joinedClub: '2016-07-01',
        parent: null,
        yearsInClub: 8,
        skills: { dribbling: 7, passing: 7, shooting: 5, defense: 9 }
    },
    'stefan_polak': {
        username: 'stefan_polak',
        fullName: 'Štefan Polák',
        dateOfBirth: '2002-09-14',
        age: 23,
        category: 'adults_young',
        position: 'Stredopoliar',
        shirtNumber: 5,
        height: 175,
        weight: 70,
        joinedClub: '2021-09-01',
        parent: null,
        yearsInClub: 3,
        skills: { dribbling: 7, passing: 8, shooting: 6, defense: 7 }
    },
    'tomas_kamenicky': {
        username: 'tomas_kamenicky',
        fullName: 'Tomáš Kamenický',
        dateOfBirth: '2010-02-28',
        age: 15,
        category: 'pripravky',
        position: 'Útočník',
        shirtNumber: 10,
        height: 150,
        weight: 40,
        joinedClub: '2024-02-01',
        parent: 'julius_kamenicky',
        skills: { dribbling: 5, passing: 5, shooting: 6, defense: 4 }
    }
};

// Všetci tréneri s informáciami
const COACHES = {
    'jan_klimo': {
        username: 'jan_klimo',
        fullName: 'Ján Klímo',
        email: 'jan.klimo@osk-poruba.sk',
        phone: '+421 905 123 456',
        specialization: ['U10-U12', 'U8-U9'],
        yearsOfExperience: 8,
        license: 'UEFA B',
        joinedClub: '2016-01-15',
        trainingStyle: 'Taktický prístup s dôrazom na techniku'
    },
    'marian_horvath': {
        username: 'marian_horvath',
        fullName: 'Marián Horváth',
        email: 'marian.horvath@osk-poruba.sk',
        phone: '+421 905 234 567',
        specialization: ['U13-U18'],
        yearsOfExperience: 12,
        license: 'UEFA A',
        joinedClub: '2012-06-10',
        trainingStyle: 'Fyzická príprava s hernou taktikou'
    },
    'peter_novak': {
        username: 'peter_novak',
        fullName: 'Peter Novák',
        email: 'peter.novak@osk-poruba.sk',
        phone: '+421 905 345 678',
        specialization: ['Dospelí 18+'],
        yearsOfExperience: 15,
        license: 'UEFA Pro',
        joinedClub: '2009-03-20',
        trainingStyle: 'Moderný futbal s vysokou intenzitou'
    }
};

// Všetky rodiny
const FAMILIES = {
    'adamcik_family': {
        familyName: 'Adamčíkova',
        parent: 'anna_adamcikova',
        children: ['jozef_adamcik', 'marko_adamcik'],
        address: 'Hlavná 45, 049 41 Kamenná Poruba',
        city: 'Kamenná Poruba',
        contactPerson: 'Anna Adamčíková',
        createdDate: '2024-01-10'
    },
    'kuba_family': {
        familyName: 'Kuba',
        parent: 'milan_kuba',
        children: ['lukas_kuba'],
        address: 'Školská 12, 049 41 Kamenná Poruba',
        city: 'Kamenná Poruba',
        contactPerson: 'Milan Kuba',
        createdDate: '2024-01-15'
    },
    'horvath_family': {
        familyName: 'Horváthova',
        parent: 'eva_horvathova',
        children: ['jakub_horvath'],
        address: 'Lesná 78, 049 41 Kamenná Poruba',
        city: 'Kamenná Poruba',
        contactPerson: 'Eva Horváthová',
        createdDate: '2024-01-20'
    },
    'kamenicky_family': {
        familyName: 'Kamenický',
        parent: 'julius_kamenicky',
        children: ['tomas_kamenicky'],
        address: 'Parková 33, 049 41 Kamenná Poruba',
        city: 'Kamenná Poruba',
        contactPerson: 'Július Kamenický',
        createdDate: '2024-02-01'
    }
};

// Kategórie hráčov
const PLAYER_CATEGORIES = {
    'pripravka_u9': {
        name: 'Prípravky (U8-U9)',
        ageMin: 8,
        ageMax: 9,
        description: 'Najmenší hráči, základ futbalu'
    },
    'pripravka_u11': {
        name: 'Prípravka U11',
    },
    'ziaci': {
        name: 'Žiaci (U10-U12)',
        ageMin: 10,
        ageMax: 12,
        description: 'Mladí futbalisti s technickým zameraním'
    },
    'dorastenci': {
        name: 'Dorastenci (U16-U19)',
        ageMin: 13,
        ageMax: 18,
        description: 'Starší žiaci v príprave na dospelý futbal'
    },
    'adults_young': {
        name: 'Dospelí - Mladí hráči (18-25)',
        ageMin: 18,
        ageMax: 25,
        description: 'Mladí dospelí hráči'
    },
    'adults_pro': {
        name: 'Dospelí - Skúsení/Profiloví hráči (25+)',
        ageMin: 25,
        ageMax: null,
        description: 'Skúsení a profesionálni hráči'
    }
};

// Pozície na ihrisku
const POSITIONS = [
    { code: 'GK', name: 'Brankár', description: 'Strážca brány' },
    { code: 'DEF', name: 'Obranca', description: 'Hráč v obrane' },
    { code: 'MID', name: 'Stredopoliar', description: 'Hráč v strede poľa' },
    { code: 'FW', name: 'Útočník', description: 'Hráč v útoku' }
];

// Typy tréningov
const TRAINING_TYPES = {
    'technical': {
        name: 'Technický tréning',
        description: 'Zameranie na technické zručnosti'
    },
    'tactical': {
        name: 'Taktický tréning',
        description: 'Zameranie na taktiku a stratégiu'
    },
    'physical': {
        name: 'Fyzický tréning',
        description: 'Zameranie na fyzickú prípravu'
    },
    'friendly': {
        name: 'Prieťahový zápas',
        description: 'Prátelský zápas s inou časťou'
    }
};

// Funkcia na overenie používateľa
function authenticateUser(username, password) {
    const user = USERS[username];
    if (user && user.password === password) {
        return {
            success: true,
            user: {
                username: user.username,
                fullName: user.fullName,
                role: user.role,
                email: user.email
            }
        };
    }
    return { success: false, message: 'Neplatné meno alebo heslo' };
}

// Funkcia na získanie všetkých hráčov v kategórii
function getPlayersByCategory(category) {
    return Object.values(PLAYERS).filter(p => p.category === category);
}

// Funkcia na získanie detí rodiča
function getChildrenOfParent(parentUsername) {
    const parent = USERS[parentUsername];
    if (parent && parent.role === 'parent' && parent.children) {
        return parent.children.map(childUsername => PLAYERS[childUsername]);
    }
    return [];
}

// Funkcia na získanie tréningov pre kategóriu
function getCoachesForCategory(category) {
    return Object.values(COACHES).filter(c => c.specialization.includes(category));
}

// Export pre použitie v HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        USERS,
        PLAYERS,
        COACHES,
        FAMILIES,
        PLAYER_CATEGORIES,
        POSITIONS,
        TRAINING_TYPES,
        authenticateUser,
        getPlayersByCategory,
        getChildrenOfParent,
        getCoachesForCategory
    };
}
