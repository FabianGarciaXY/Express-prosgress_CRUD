const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: {name: 'woopa'},
      update: {},
      create: {
        name: 'Woopa',
        username: 'ajolonauta',
        mission: 'Node'
      }
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
      where: { name: 'Woopa 4' },
      update: {},
      create: {
        name: 'Woopa 4',
				username: 'ajolonauta4',
				mission: 'Node'
      },
    });

    const woopa5 = await prisma.explorer.upsert({
      where: { name: 'Woopa 5' },
      update: {},
      create: {
        name: 'Woopa 5',
				username: 'ajolonauta5',
				mission: 'Node'
      },
    });
  
    console.log('Create 5 explorers');
  }

  catch(e) {
    console.log(e)
    process.exit(1)
  }
  
  finally {
    prisma.$disconnect();
  }
});

(async function main() {
  try {
    const user0 = await prisma.user.upsert({
      where: {name: 'User0'},
      update: {},
      create: {
        name: 'User0',
        lang: 'Es', 
        missionComander: 'Carlo',
        enrollments: 1,
        hasCertification: true
      }
    });

    const user1 = await prisma.user.upsert({
      where: {name : 'User1'},
      update: {},
      create: {
        name: 'User1',
        lang: 'Esp',
        missionComander: 'Carlo',
        enrollments: 2,
        hasCertification: true
      }   
    });
  }  
  catch (error){
    console.log(error);  
  }
  finally {
    prisma.$disconnect();
  }
}) ();
