---
title: "SATPose: Improving Monocular 3D Pose Estimation with Spatial-aware Ground Tactility"
author: Lishuang Zhan, Enting Ying, Jiabao Gan, Shihui Guo*, Boyu Gao, Yipeng Qin
img: /assets/researches/SAT/acmmm_satpose.jpg
publishDate: '2024-07-18'
tags:
  - Proceedings of the 32st ACM International Conference on Multimedia (ACM MM), 2024
---

<h5>Abstract</h5>
Estimating 3D human poses from monocular images is an important research area with many practical applications. However, the depth ambiguity of 2D solutions limits their accuracy in actions where occlusion exits or where slight centroid shifts can result in significant 3D pose variations. In this paper, we introduce a novel multimodal approach to mitigate the depth ambiguity inherent in monocular solutions by integrating spatial-aware pressure information. We first establish a data collection system with a pressure mat and a monocular camera, and construct a large-scale multimodal human activity dataset comprising over 600,000 frames of motion data. Utilizing this dataset, we propose a pressure image reconstruction network to extract pressure priors from monocular images. Subsequently, we introduce a Transformer-based multimodal pose estimation network to combine pressure priors with monocular images, achieving a world mean per joint position error of 51.6mm, outperforming state-of-the-art methods. Extensive experiments demonstrate the effectiveness of our multimodal 3D human pose estimation method across various actions and joints, highlighting the significance of spatial-aware pressure in improving the accuracy of monocular-vision-based methods. Our dataset is available at: https://github.com/LishuangZhan/SATPose. 

<h5>BibTex</h5>
Holding....
</p>
