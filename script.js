document.addEventListener("DOMContentLoaded", function() {
    const jsonData = {
        "tasks": [
            {
                "task_id": 18882,
                "task_title": "Technical-project-management",
                "task_description": "Create the journey of a user through the product.",
                "assets": [
                    {
                        "asset_id": 18883,
                        "asset_title": "Technical Project Management",
                        "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                        "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                        "asset_type": "display_asset",
                        "asset_content_type": "video"
                    },
                    {
                        "asset_id": 18884,
                        "asset_title": "Threadbuild",
                        "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                        "asset_content": " ",
                        "asset_type": "input_asset",
                        "asset_content_type": "threadbuilder"
                    },
                    {
                        "asset_id": 18885,
                        "asset_title": "Structure you pointers ",
                        "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                        "asset_content": " ",
                        "asset_type": "input_asset",
                        "asset_content_type": "article"
                    },
                    {
                        "asset_id": 18886,
                        "asset_title": "4SA Method",
                        "asset_description": "To explore more read more",
                        "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                        "asset_type": "display_asset",
                        "asset_content_type": "article"
                    }
                ]
            }
        ]
    };

    function createAssetCard(asset) {
        let assetContent = '';
        if (asset.asset_content_type === 'video') {
            assetContent = `<iframe src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>`;
        } else if (asset.asset_content_type === 'article') {
            assetContent = `<a href="${asset.asset_content}" target="_blank">Read Article</a>`;
        } else if (asset.asset_content_type === 'threadbuilder' || asset.asset_content_type === 'input_asset') {
            assetContent = `<textarea placeholder="Add your input here..."></textarea>`;
        }

        return `
            <div class="card">
                <div class="cardheader">
                    <h4>${asset.asset_title}</h4>
                    <p class="icon">i</p>
                </div>
                <div class="cardcontant">
                    <p>${asset.asset_description}</p>
                </div>


                <div class="assetcontent">${assetContent}</div>
            </div>
        `;
    }

    function renderTask(task) {
        document.getElementById('task-title').innerText = task.task_title;
        document.getElementById('task-short-description').innerText = task.task_description.split('.')[0];
        document.getElementById('task-long-description').innerText = task.task_description;

        const assetsContainer = document.getElementById('assets-container');
        assetsContainer.innerHTML = '';

        task.assets.forEach(asset => {
            const assetCard = createAssetCard(asset);
            assetsContainer.innerHTML += assetCard;
        });
    }

    // Assuming the JSON data contains one task for simplicity
    renderTask(jsonData.tasks[0]);
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const upperSidebar = document.querySelector('.upper-sidebar');
    const lowerSidebar = document.querySelector('.lower-sidebar');
    const toggleArrow = document.querySelector('.toggle-arrow');

    toggleArrow.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
    });
});