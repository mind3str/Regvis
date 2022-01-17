const url = "datas1.csv";
const taxonomy = {
    DataType: ["Time serials", "Record data", "Spatiotemporal", "Network", "Spatial","None"],
    domain:["Computer science","Financial","Both"],
    Regulation_Aims:["Financial stability monitoring","Fraud and market abuse detection and prevention","Guarantee loans","Blockchain","Tax evasion discovery","Investment risk","Asset management","Credit product assess","Mobile money transfer","Stock forestcasting","Fixed incomes analysis","Mutual funds analysis","Trading & sales","None"],
    Visualisation: ["SOM", "Animations", "The ForceAtlas2 layout", "Histograms", "Heatmap", "Multi-line chart", "network visualization", "Parallel coordinates", "Scatter plot", "KnotLines", "Force-directed graph", "Sankey view", "Tree map", "Timeline", "Axis", "Connection View", "The node-link graph", "3D Treemap", "Animation", "The line chart", "Rader word frequency chart", "Bubble motion chart", "Bar chart", "Pixel bar chart matrix", "The pixel-based growth Matrix", "bubble chart", "The graph-based view", "The pixel-based paradigm", "The line graph","Rader view","Glyph plot","Radial","Concentric rings","Squared self-organizing map grid","Pixel","Pixel matrix","force-directed graph drawing with N-body simulation in physics","Graph","Scatter density plot","Hexagonal self-organizing map grid","Sphere-based scatter plot","Force-directed graph", "Sphere-based tree map", "Line graphs", "3D Floors and walls(Projected 2D charts on 3D walls)", "Sequence diagram", "Surface plot", "Small multiples", "Floors and walls", "Interactive Lens", "Linked triangle chart", "line chart", "Node-link diagram", "Star plot", "Geographic Map", "Splat visualization", "Glyph", "Sunburst diagram", "Icicle diagram", "pie chart", "None"],
    Interaction: ["Select", "Explore", "ReconfigureEncode", "Encode", "Abstract/Elaborate", "Filter", "Connect","Reconfigure", "None"],
    Machine_Learning: ["t-SNE", "k-means", "SOM", "SRM Modle", "not mention", "Decision Tree", "MDS", "XGBoost", "Similar to Pagerank", "Similar to k-core", "dimensionality reduction", "LSTM auto-encoder", "K-core", "Self-organizing maps", "Fuzzy C-means clustering", "Self-organizing maps", "Louvain Clustering", "Adaptive Network-based Fuzzy Inference System", "Quantum-behaved Particle Swarm Optimization", "Wavelet Transform", "Association rules", "Pattern-matching", "None"],
    Regulations_Types:["None","Financial trend analysis", "Inflation monitoring","Market monitoring","fraud detection","Commodities analysis","Bitcoin transaction analysis","Tax evasion discovery","stock analysis","Assets/Fund analysis","Consumer credit risk analysis/Credit product assess","Bank interrelations analysis","mutual funds analysis","Rating fraud","Market monitoring","Dept monitoring","Foreign Exchange rate analysis","Basel accords","Financial institutions monitoring","Bank regulations"],
    Regulatory_Agencies: ["Regulator", "User","Bank","Consumer","Investor","None"],
    Financial_Risks: ["Market Risk", "Liquedity Risk","Credit Risk","Operational Risk","None"],
    Risk_Type:["Environmental risk", "Economic risk","Financial risk","Business risk","Investment risk","None"],
    Risk_Management: ["Monitor", "Identify","Evaluation","Awareness","Investor","None"],
    //Evolution_Types: ["Time Evolution", "Network Evolution", "Feature Evolution", "Data Evolution", "Structural Evolution", "Dynamic Tree Evolution", "Models Evolution", "Field Evolution", "Clustering Evolution", "geometric evolution", "Space Evolution", "Evolutionary Trees", "Evolution View", "Three Dimensional Evolution", "Group Evolution", "Topological Evolution", "Topic Evolution", "Uncertainty Evolution", "Flow Evolution", "Dynamic Evolution","Spatiotemporal Evolution","Plots Evolution","Interactive Evolutionary"],
    DataSource: ["Open source data", "Bank", "Stock company", "Media company","Organization","None"],
    Conference: ["ICT Systems Security and Privacy Protection","IVAPP 2012 - International Conference on Information Visualization Theory and Applications","Journal of Visualization","IEA","KICSS - International Conference on Knowledge, Information and Creativity Support Systems","University of Toronto","AI Magazine","CG&A - IEEE Computer Graphics and Applications Magazine","IEEE Visualization Conference","CHI - ACM Conference on Human Factors in Computing Systems","Institute for Systems Research Technical Reports","Expert Systems with Applications","IEEE Symposium on Information Visualization","IEEE Symposium on Computational Intelligence for Financial Engineering and Economics","Workshop on Self-Organizing Maps","International UKVAC Workshop on Visual Analytics","VINCI - International Symposium on Visual Information Communication and Interaction","Conference on Visualization and Data Analysis","IEEE SIGNAL PROCESSING MAGAZINE","Journal of financial stability","International Conference on Availability,Reliability and Security","Financial Analysis and Risk Management","Hawaii International Conference on System Sciences","Managerial Auditing Journal","Conference on Data Standards,Information,and Financial Stability","SA'15 Symposium on VisHPC","ACM SIGKDD Explorations Newsletter","VINCI","IVAPP","IEEE International Conference on Intelligence and Security Informatics","information sciences","International Federation for Information Processing","IEEE Conference on Computational Intelligence for Financial Engineering &Economics","Tsinghua Science and Technology ","IEEE TCVG Symposium on Visualization","Procedia Computer Science","EUROGRAPHICS","iConference","InfoVis","Decision Support Systems","VizSec","IEEE PacificVis","TVCG","VAST","Financial Stability Report","DNB Working Paper","IEEE VIS", "EuroVis", "Big data concepts, theories, and applications(Book)", "Mapping Financial Stability(Book)", "Engineering Applications of Artificial Intelligence", "Neurocomputing"],
    //Evolution_Aims: ["visualization analysis", "Time-Feature Extraction", "visual forecast", "solve discontinuous nature of the data", "hypertext field", "smooth discretized surfaces", "network visualization analysis", "steamline visualization analysis", "tensor Visualization analysis", "Cluster detection analysis", "Evolutionary Algorithm analysis", "flow visualization analysis", "Wavelet analysis", "uncertainty information analysis", "Hierarchical topic visualization", "Time-varying data analysis", "Bitcoin transaction analysis", "Scientific Fields", "Topological Data Analysis", "Storyline visualization analysis", "Evolutionary Visual Exploration", "Cosmological N-body Simulation Analysis"],
    Title: ["A Survey on Visual Analysis Approaches for Financial Data",
    "Financevis.net:A Visual Survey of Financial Data Visualizations",
    "The Application of Visual Analytics to Financial Stability Monitoring",
    "Big Data in Finance",
    "Mapping financial stability",
    "Exploiting the self-organizing financial stability map",
    "Self-organizing time map: An abstraction of temporal multivariate patterns",
    "Dynamic visualization of large transaction networks: the daily Dutch overnight money market",
    "Systemic risk monitor: A model for systemic risk analysis and stress testing of banking systems",
    "Visual analytics for fraud detection and monitoring",
    "Wirevis: Visualization of categorical， time-varying data from financial transactions",
    "EVA: Visual analytics to identify fraudulent events",
    "VAET: A visual analytics approach for e-transactions time-series",
    "Visual analytics for loan guarantee network risk management",
    "Exploring Entity Behavior on the Bitcoin Blockchain",
    "BitConduite: Visualizing and Analyzing Activity on the Bitcoin Network",
    "Bitconeview: visualization of flows in the bitcoin transaction graph",
    "BitExTract: Interactive Visualization for Extracting Bitcoin Exchange Intelligence",
    "A visual analytics system to support tax evasion discovery",
    "A Visualization Approach for Frauds Detection in Financial Market",
    "Using Visual Analytics to Enhance Data Exploration and Knowledge Discovery in Financial Systemic Risk Analysis: The Multivariate Density Estimator",
    "An advanced network visualization system for financial crime detection",
    "Hunting High and Low:Visualising Shifting Correlations in Financial Markets",
    "Financial Markets in Motion: Visualising stock price and news interactions during the 2008 global financial crisis",
    "Visual market sector analysis for financial time series data",
    "A spectral visualization system for analyzing financial time series data",
    "RiskVA: A Visual Analytics System for Consumer Credit Risk Analysis",
    "From Text to Bank Interrelation Maps",
    "Visual Analytics for Detecting Anomalous Activity in Mobile Money Transfer Services",
    "Visual analysis of mutual fund performance",
    "Financial Visualization Case Study: Correlating Financial Timeseries and Discrete Events to Support Investment Decisions",
    "Relevance Driven Visualization of Financial Performance Measures",
    "sPortfolio: Stratified Visual Analysis of Stock Portfolios",
    "Applying Animation to the Visual Analysis of Financial Time-Dependent Data",
    "FinVis: Applied visual analytics for personal financial planning",
    "Stream-based active learning for sentiment analysis in the financial domain",
    "Occupational fraud detection through visualization",
    "A Fraud Detection Visualization System Utilizing Radial Drawings and Heat-maps",
    "A Visual Analytics System for Financial Time-Series Data",
    "Trajectory-Based Visual Analysis of Large Financial TimeSeries Data",
    "Discovery of rating fraud with real-time streaming visual analytics",
    "Visualizing large-scale structure of a million-firms economic network",
    "Applying visual analytics to the global legal entity identifier system to enhance financial transparency",
    "Interactive visual analysis of anomalous accounts payable transactions in SAP enterprise systems",
    "An Experimental Study of Financial Portfolio Selection with Visual Analytics for Decision Support",
    "Visual Analytics on the Financial Market: Pixel-based Analysis and Comparison of Long-Term Investments",
    "The application of visual analytics to financial decision-making and risk management: Notes from behavioural economic",
    "Go with the Bitcoin Flow, with Visual Analytics",
    "Macroprudential oversight, risk communication and visualization",
    "Business Analytics Based on Financial Time Series",
    "Tile-based parallel coordinates and its application in financial visualization",
    "Visual signatures for financial time series",
    "A Novel Explorative Visualization Tool for Financial Time Series Data Analysis",
    "Fuzzy Clustering of the Self-Organizing Map: Some Applications on Financial Time Series",
    "Sovereign debt monitor: A visual Self-organizing maps approach",
    "Sphere-based Information Visualization: Challenges and Benefits",
    "Louvain Clustering for Big Data Graph Visual Analytics",
    "VectorLens: Angular Selection of Curves within 2D Dense Visualizations",
    "Financial forecasting using ANFIS networks with Quantum-behaved Particle Swarm Optimization",
    "Adapting Treemaps to Stock Portfolio Visualization",
    "Financial Viewpoints: using point-of-view to enable understanding of information",
    "Circle Segments: A Technique for Visually Exploring Large Multidimensional Data Sets",
    "FINESSE: a financial information spreadsheet",
    "Domesticating Bead: adapting an information visualization system to a financial institution",
    "Business visualization applications",
    "The NASD Regulation Advanced-Detection System",
    "An interactive framework for visualizing foreign currency exchange options",
    "Effective Information Visualization - Guidelines and Metrics for 3D Interactive Representations of Business Data",
    "Visualizing the stock market",
    "Visualising a fund manager flow graph with columns and worms",
    "Visual Exploration and Discovery of atypical Behavior in Financial Time Series Data using Two-Dimensional Colormaps",
    "Visualization Technique for Linked Changes in Exchange Rates Between Three Currencies",
    "Visualization of Financial Trends Using Chance Discovery Methods",
    "E-R modeling and visualization of large mutual fund data",
    "FundExplorer: supporting the diversification of mutual fund portfolios using context treemaps",
    "Using MoneyTree To Represent Financial Data",
    "Visualizing Time-Dependent Data in Multivariate Hierarchic Plots - Design and Evaluation of an Economic Application",
    "Vis4AUI: Visual Analysis of Banking Activity Networks",
    "BankSealer: An Online Banking Fraud Analysis and Decision Support System",
    "iConVis: Interactive Visual Exploration of the Default Contagion Risk for Networked-guarantee Loans",
    ]
};
const taxkeys = Object.keys(taxonomy);
const container = d3.select(".grid");

d3.csv(url)
	.then(function (data) {
	    console.log(data);
	    d3.selectAll("#count").text(data.length);
	    var total = {};
	    d3.select(".input_search").on("input", function () {
	        var filters = taxkeys.map(function (taxkey) {
	                var cats = [];
	                taxonomy[taxkey].forEach(function (cat) {
	                    searchtext = document.getElementById("search").value;
	                    if (taxkey == "Title") {
	                        cats.push(cat);
	                    }
	                    if (
                        document.querySelectorAll('.fs-option.selected').forEach(function (i) {
                            if ((i.getAttribute('data-value') == cat) &&
                                (i.parentElement.getElementsByClassName('fs-optgroup-label')[0].innerText == taxkey)
                            ) { cats.push(cat); }
	                    }
                        )
					) {
	                        console.log(cats);
	                    }
	                });
	            return [taxkey, cats];
	        });
	        console.log(filters);
	        refreshTechniques(filters);
	    })
	    //������ ����
	    d3.selectAll(".fs-option").on("click", function () {
	            var $wrap = $(this).closest('.fs-wrap');
	            if ($wrap.hasClass('multiple')) {
	                var selected = [];
	                $(this).toggleClass('selected');
	                $wrap.find('.fs-option.selected').each(function (i, el) {
	                    selected.push($(el).attr('data-value'));
	                });
	            }
	            else {
	                var selected = $(this).attr('data-value');
	                $wrap.find('.fs-option').removeClass('selected');
	                $(this).addClass('selected');
	                $wrap.find('.fs-dropdown').hide();
	            }
	            $wrap.find('select').val(selected);
	            $wrap.find('select').fSelect('reloadDropdownLabel');
	            var filters = taxkeys.map(function (taxkey) {
	            var cats = [];
	            taxonomy[taxkey].forEach(function (cat) {
	                
	                if (
                        document.querySelectorAll('.fs-option.selected').forEach(function(i){
                            if ((i.getAttribute('data-value') == cat) &&
                                (i.parentElement.getElementsByClassName('fs-optgroup-label')[0].innerText == taxkey)
                            ) { cats.push(cat);}
	                    }
                        )
					) {
	                    console.log(cats);
	                }
	            });
                console.log(filters);
	            return [taxkey, cats];
	            });
	        refreshTechniques(filters);
	    });
	    function refreshTechniques(filters) {
	        var fData = data.filter((d) => filterData(d, filters));
	        d3.select("#count").text(fData.length);
	        var ids = fData.map((d) => d.picture);
	        d3.selectAll(".grid-item").style("display", (d) =>
	            ids.indexOf(d.picture) != -1 ? null : "none"
			);
	        msnry.layout();
	    }

	    var div = container
			.selectAll("div")
			.data(data)
			.enter()
			.append("div")
			.classed("grid-item", true);

	    div.append("img").attr("src", (d) => "images/" + d.picture);
	    div.append("h3").text((d) => d.Title);
	    div.append("span").html((d) =>
	        [
				d.Author,
				". <i>",
				d["Conference"],
				"</i> (",
				d["Year"],
				")",
			//	" <a href=" + d.URL + ' target="_blank">[Link]</a>',
				"<br>",
	        ].join("")
		);
	    var tags = div.append("div").style("margin-top", "7px");
	})
	.then(function () {
	    imagesLoaded(".grid", function () {
	        var elem = document.querySelector(".grid");
	        window.msnry = new Masonry(elem, {
	            // options
	            itemSelector: ".grid-item",
	            columnWidth: 250,
	            gutter: 15,
	        });
	    });
	})
	.catch(function (error) {
	    throw error;
	});


function filterData(d, filters) {
    return (
    filters.every(function (fil) {
        console.log(fil[0]);
        if (fil[0] == "Title") {
            searchtext = document.getElementById("search").value;
            
            if (fil[1].length == 0 || d[fil[0]].indexOf(searchtext) != -1) 
                        return true;
        }
        else {
                console.log(typeof(d[fil[0]]))
                if (d[fil[0]].indexOf(",") != -1) {
                    sp = d[fil[0]].split(",");
                    for (i = 0; i < sp.length; i++) {
                        if (fil[1].length == 0 || fil[1].indexOf(sp[i]) != -1)
                            return true;
                    }
                } 
            
            return fil[1].length == 0 || fil[1].indexOf(d[fil[0]]) != -1;
        }

    })
);
}


/*function buttonClick() {
    var menuSpan = document.querySelectorAll(".menuh4");
    var parentDiv = this.parentNode;
    if (parentDiv.querySelectorAll(".collasped").length != 0)
    {
        d3.select(parentDiv).selectAll(".collasped")
        .attr("class", "checkbox-container");
    }
    else {
        d3.select(parentDiv).selectAll(".checkbox-container")
          .attr("class", "collasped")
    }
}*/



