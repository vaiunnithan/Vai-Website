// D3 chart: change the labels and examples here to customize the visualization.
const categories = [
 {theme:'Finance & analysis',examples:['Amalgamated Bank','Subway IP, LLC','FinDrop']},
 {theme:'Data & technology',examples:['Amalgamated Bank','FinDrop']},
 {theme:'Creativity & performance',examples:['Classical dance','Rangila','FinDrop']},
 {theme:'Community & leadership',examples:['American Red Cross','Rangila','Classical dance']}
];
function renderChart(){
 const root=d3.select('#chart'); if(root.empty())return;
 const width=840,height=330,margin={top:22,right:65,bottom:50,left:230};
 const svg=root.append('svg').attr('viewBox',`0 0 ${width} ${height}`).attr('aria-label','Bar chart of experience counts by theme');
 const x=d3.scaleLinear().domain([0,4]).range([margin.left,width-margin.right]);
 const y=d3.scaleBand().domain(categories.map(d=>d.theme)).range([margin.top,height-margin.bottom]).padding(.32);
 svg.append('g').attr('transform',`translate(0,${height-margin.bottom})`).call(d3.axisBottom(x).ticks(4).tickFormat(d3.format('d'))).call(g=>g.selectAll('text').style('font-size','13px'));
 svg.append('g').attr('transform',`translate(${margin.left},0)`).call(d3.axisLeft(y).tickSize(0)).call(g=>g.select('.domain').remove()).call(g=>g.selectAll('text').attr('dx','-12').style('font-size','14px'));
 svg.selectAll('.bar').data(categories).join('rect').attr('class','bar').attr('x',x(0)).attr('y',d=>y(d.theme)).attr('height',y.bandwidth()).attr('width',0).attr('rx',5).attr('fill',(d,i)=>['#ae644b','#596c5d','#a88f69','#877d9c'][i]).attr('tabindex',0).attr('role','button').attr('aria-label',d=>`${d.theme}: ${d.examples.length} examples. Press Enter for details`).on('mouseover',(event,d)=>showDetails(d)).on('click',(event,d)=>showDetails(d)).on('keydown',(event,d)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();showDetails(d);}}).transition().duration(550).attr('width',d=>x(d.examples.length)-x(0));
 svg.selectAll('.bar-label').data(categories).join('text').attr('class','bar-label').attr('x',d=>x(d.examples.length)+10).attr('y',d=>y(d.theme)+y.bandwidth()/2+5).text(d=>d.examples.length).style('font-weight',700).style('fill','#26372f');
 function showDetails(d){d3.select('#chart-detail').text(`${d.theme}: ${d.examples.join(' • ')}`)}
}
if(typeof d3!=='undefined')renderChart();else document.getElementById('chart').textContent='D3 did not load. Please check your internet connection.';
