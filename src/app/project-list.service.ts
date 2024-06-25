export class ProjectService{
  getProjects() {
    return [
      {
        title: 'Gym Management System',
        description: 'A web application to manage gym memberships, track workouts, and schedule classes.',
        technologies: 'Angular, Node.js, MongoDB'
      },
      {
        title: 'Assignment Tracker',
        description: 'An app to help students track their assignments, deadlines, and grades.',
        technologies: 'React, Springboot, TypeScript'
      },
      {
        title: 'E-commerce Store',
        description: 'Buy and sell items on this e-commerce platform.',
        technologies: 'Angular, Express, MySQL'
      },
      {
        title: 'Food Delivery App',
        description: 'A mobile app to order food from local restaurants and track delivery.',
        technologies: 'Flask, Django, mySQL'
      },
      {
        title: 'Virtual Meeting Platform',
        description: 'An application to facilitate virtual meetings with video and chat features.',
        technologies: 'React, Node.js, MongoDB'
      }
    ];
  }
}
