const { Article, Billionaire, UnderThirtyProfile } = require('./models');

// //CREATE

Article.create({
    title:'When Building A Fintech Company, Take No Shortcuts',
    category: 'Money',
    author: 'Chris Dean',
    date: 12012021,
    content: 'Tech-forward financial tools are more accessible than ever. Fintech startups and non-financial companies can embed banking services right into their platforms to deepen relationships with customers and bring in additional revenue. These exciting tools can be utilized by partnering with established banks rather than going through the years-long challenge of seeking out a charter. Banks, meanwhile, can leverage fintech partners to tap new customers. Thanks to banking as a service (BaaS) and API banking, getting a fintech app to market is largely just a matter of finding the right partners.',
    views: 10000,
    comments: 'Awesome article',
    likes: 950,
    bio: 'Chris Dean, CEO and co-founder of Treasury Prime, a leading banking as a service (BaaS) provider. '
})
.then(createArticle => {
    console.log('Create Article', createArticle.toJSON());
})
.catch(function(error){
    console.log('Error creating an Article');
})

//create for billionaire

Billionaire.create({
    name: 'Brian Armstrong',
    age: 38,
    company: 'Coinbase',
    net_worth: 12,
    facts: 'Brian Armstrong is the chief executive of Coinbase Global, the largest cryptocurrency exchange in the United States.',
    source: 'cryptocurrency,Self Made',
    self_made_score: 8,
    residence: 'San Francisco, California',
    citizenship: 'United States',
    education: 'Bachelor of Arts/Economics, Rice University; Master of Arts/Science, Rice University'
})
.then(createBillionaire => {
    console.log('Create Billionaire Profile', createBillionaire.toJSON());
})
.catch(function(error){
    console.log('Error creating Billionaire profile');
})

UnderThirtyProfile.create({
    name:'Whitney Wolfe Herd',
    age: 32,
    position: 'Founder & CEO',
    company: 'Bumble',
    bio: 'After settling a sexual harassment suit with her Tinder cofounder, Wolfe Herd started Bumble in 2014 as a dating app designed to enable women to make the first move.',
    residence: 'Austin, Texas',
    education: 'Southern Methodist University',
    social: 'Instagram: @whitney',
    favorite_app: 'Bumble'
})
.then(createUnderThirtyProfile => {
    console.log('Create Under Thirty Profile', createUnderThirtyProfile.toJSON());
})
.catch(function(error){
    console.log('Error creating profile');
})

//READ an Article

Article.findOne({ where: { title:'When Building A Fintech Company, Take No Shortcuts', } }) //used to find data by specific attribute
.then(article => {
    console.log(article.toJSON());
})
.catch(function(err){
    console.log('ERROR', err);
})

Article.findByPk(7) //used to find data by ID
.then(article => {
    console.log(article.toJSON());
})
.catch(function(err){
    console.log('Error', err);
})

//Read a billionaire profile

Billionaire.findAll({ where: { name: 'Brian Armstrong' } })
.then(billionaire => {
    console.log(billionaire.toJSON());
})


